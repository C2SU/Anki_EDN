/* ==== COPY BLOCK (remplacé) ==== */
// gestion clique + fallback + fonction globale copyText()
(function () {
  const fallbackCopy = (text) => {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    } catch (e) {
      // silent
    }
  };

  const showFeedback = (block) => {
    const fb = block.querySelector('.copy-feedback');
    if (!fb) return;
    fb.classList.add('visible');

    const isCollapse = block.classList.contains('collapse-copy');
    if (isCollapse) {
      block.classList.add('expanded');
    }

    setTimeout(() => {
      fb.classList.remove('visible');
      if (isCollapse) {
        block.classList.remove('expanded');
      }
    }, 1500); // Un peu plus long pour laisser le temps de lire
  };

  const writeText = (text, block) => {
    if (!text) return Promise.resolve();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(() => showFeedback(block)).catch(() => {
        fallbackCopy(text);
        showFeedback(block);
      });
    } else {
      fallbackCopy(text);
      showFeedback(block);
      return Promise.resolve();
    }
  };

  // Attacheurs sur les blocs existants
  document.querySelectorAll('.copy-block').forEach(block => {
    block.addEventListener('click', () => {
      const codeElement = block.querySelector('code');
      const text = codeElement ? codeElement.innerText.trim() : block.innerText.trim();
      writeText(text, block);
    });
  });

  // Expose une fonction globale pour supporter onclick inline (installation.md)
  window.copyText = function (el) {
    if (!el) return;
    const block = (el instanceof Element) ? el : document.querySelector(String(el));
    if (!block) return;
    const codeElement = block.querySelector('code');
    const text = codeElement ? codeElement.innerText.trim() : block.innerText.trim();
    return writeText(text, block);
  };
})();
/* ==== FIN COPY BLOCK ==== */
/* ==== SPRITE SVG (icône texte GIF) ==== */
const sprite = `
    <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
      <symbol id="gif-texte" viewBox="0 0 64 24" fill="currentColor">
        <!-- G -->
        <path d="M14.3 16.5c-1.3 0-2.5-.3-3.4-1s-1.5-1.6-1.8-2.8c-.2-.8-.3-1.6-.3-2.5s.1-1.7.3-2.5c.3-1.2.9-2.1 1.8-2.8.9-.7 2-1 3.4-1 1.5 0 2.7.4 3.6 1.2s1.4 1.9 1.4 3.4h-2.4c0-.8-.2-1.4-.7-1.8-.4-.4-1-.6-1.8-.6s-1.4.2-1.8.6-.7 1-.9 1.7c-.1.6-.2 1.3-.2 2.1s.1 1.5.2 2.1c.2.7.5 1.3.9 1.7.5.4 1.1.6 1.8.6.6 0 1.2-.1 1.6-.4.4-.3.7-.6.8-1h-2.4v-1.9h4.7v1c0 1.4-.5 2.4-1.4 3.2-.8.7-2 1.1-3.5 1.1z"/>
        <!-- I -->
        <path d="M22.5 6.2h2.4v11.2h-2.4V6.2z"/>
        <!-- F -->
        <path d="M28.3 6.2h6.8v2.1h-4.4v2.4h4.1v2.1h-4.1v4.6h-2.4V6.2z"/>
      </symbol>
    </svg>
  `;
document.body.insertAdjacentHTML("afterbegin", sprite);

/* ==== GIF-WRAPPER ==== */
document.querySelectorAll(".gif-wrapper").forEach(wrapper => {
  const videoUrl = wrapper.dataset.video;
  const fallbackUrl = wrapper.dataset.videoFallback;
  const captionText = wrapper.dataset.caption || "";

  // --- Bouton Play ---
  const btn = document.createElement("button");
  btn.className = "gif-btn";
  btn.innerHTML = `
      <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
      </svg>
    `;
  wrapper.appendChild(btn);

  // --- Figure contenant la vidéo ---
  const figure = document.createElement("figure");
  figure.className = "embed-figure";
  figure.style.display = "none";

  const video = document.createElement("video");
  video.controls = true;
  video.playsInline = true;
  video.loop = true;
  video.style.width = "100%";
  video.classList.add("video-anim");

  // Sources vidéo
  const root = (typeof path_to_root !== "undefined") ? path_to_root : "";
  const resolveUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/")) return url;
    return root + url;
  };

  let lastSource = null;
  if (videoUrl) {
    const sourceMain = document.createElement("source");
    sourceMain.src = resolveUrl(videoUrl);
    sourceMain.type = videoUrl.endsWith(".mp4") ? "video/mp4" : "video/webm";
    video.appendChild(sourceMain);
    lastSource = sourceMain;
  }
  if (fallbackUrl) {
    const sourceFallback = document.createElement("source");
    sourceFallback.src = resolveUrl(fallbackUrl);
    sourceFallback.type = fallbackUrl.endsWith(".mp4") ? "video/mp4" : "video/webm";
    video.appendChild(sourceFallback);
    lastSource = sourceFallback;
  }

  const handleMediaError = () => {
    figure.innerHTML = `<div class="media-fallback">Média en cours de création...</div>`;
  };
  video.onerror = handleMediaError;
  if (lastSource) {
    lastSource.onerror = handleMediaError;
  }

  figure.appendChild(video);

  if (captionText.trim() !== "") {
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = captionText;
    figcaption.style.fontSize = "0.8em";
    figcaption.style.marginTop = "0.3em";
    figcaption.style.textAlign = "center";
    figure.appendChild(figcaption);
  }

  const insertTarget = wrapper.closest("h1, h2, h3, h4, h5, h6") || wrapper;
  insertTarget.parentNode.insertBefore(figure, insertTarget.nextSibling);

  let isVideoVisible = false;
  btn.addEventListener("click", () => {
    if (!isVideoVisible) {
      figure.style.display = "block";
      video.play().catch(() => { });
      isVideoVisible = true;
    } else {
      video.pause();
      figure.style.display = "none";
      isVideoVisible = false;
    }
  });

  video.addEventListener("click", () => {
    if (video.paused) {
      video.play().catch(() => { });
    } else {
      video.pause();
    }
  });
});

/* ==== FOOTER ==== */
// ancien code remplacé : création directe du footer
document.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('.site-footer')) {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
        <p>© 2026 Pole Info – Tous droits réservés</p>
        <p>Site par Angelo MARCIS</p>
        <div class="social-icons">
          <figure>
            <a href="https://discord.gg/2A7zHAEBYt" target="_blank" aria-label="Discord">
              <img src="images/discord-logo.svg" alt="Discord" class="social-logo">
            </a>
            <figcaption>Discord</figcaption>
          </figure>
          <figure>
            <a href="https://github.com/C2SU/Anki_EDN" target="_blank" aria-label="GitHub">
              <img src="images/github-logo.svg" alt="GitHub" class="social-logo">
            </a>
            <figcaption>GitHub</figcaption>
          </figure>
        </div>
        <p class="footer-contribute">
          🤝 Ce deck est maintenu par la communauté — 
          <a href="https://github.com/C2SU/Anki_EDN" target="_blank">contribuez sur GitHub</a> 
          pour l'améliorer !
        </p>
      `;
    document.body.appendChild(footer);
  }

  // Exemple d'ajout sûr dans le <head> (meta)
  if (!document.querySelector('meta[name="site-author"]')) {
    const m = document.createElement('meta');
    m.name = 'site-author';
    m.content = 'Pole Info';
    document.head.appendChild(m);
  }

  // Rewrite missions.html link to Notion directly
  const missionsLinks = document.querySelectorAll('a[href*="missions.html"]');
  missionsLinks.forEach(link => {
    link.href = 'https://melodic-sense-18f.notion.site/Missions-prendre-2d4d9253bfce807385c6cf8e08bbe4d6';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
});

/* ==== FALLBACK MÉDIAS GLOBAUX ==== */
const showFallback = (target) => {
  const fallback = document.createElement("div");
  fallback.className = "media-fallback";
  fallback.textContent = "Média en cours de création...";
  target.replaceWith(fallback);
};

// Images
document.querySelectorAll("img").forEach(img => {
  if (!img.hasAttribute("alt")) {
    img.alt = "Média en cours de création...";
  }
  img.addEventListener("error", () => showFallback(img));
});

// Vidéos / audios
document.querySelectorAll("video, audio").forEach(media => {
  media.onerror = () => showFallback(media);
  media.onstalled = () => showFallback(media);
  setTimeout(() => {
    if (media.readyState === 0) {
      showFallback(media);
    }
  }, 2000);
});

/* ==== VARIABLE {{date}} ==== */
const now = new Date();
const month = String(now.getMonth() + 1).padStart(2, '0');
const year = String(now.getFullYear()).slice(-2);
const formattedDate = `${month}/${year}`;

// Remplace {{date}} uniquement dans les nœuds texte (préserve le DOM et les listeners)
(function replaceDateInTextNodes(root) {
  const re = /\{\{date\}\}/g;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while (node = walker.nextNode()) {
    if (re.test(node.nodeValue)) {
      node.nodeValue = node.nodeValue.replace(re, formattedDate);
    }
  }
})(document.body);

/* ==== CAROUSEL ==== */
(function initCarousel() {
  const carousels = document.querySelectorAll('.carousel-container');
  carousels.forEach(container => {
    const slides = container.querySelectorAll('.carousel-slide');
    const prevBtn = container.querySelector('.carousel-prev');
    const nextBtn = container.querySelector('.carousel-next');
    let currentIndex = 0;
    let intervalId;

    if (slides.length === 0) return;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      currentIndex = index;
    };

    const nextSlide = () => {
      showSlide((currentIndex + 1) % slides.length);
    };

    const prevSlide = () => {
      showSlide((currentIndex - 1 + slides.length) % slides.length);
    };

    const startAutoPlay = () => {
      clearInterval(intervalId); // Ensure no previous interval is running
      intervalId = setInterval(nextSlide, 12500); // 12.5 seconds
    };

    const stopAutoPlay = () => {
      clearInterval(intervalId);
    };

    // Event Listeners
    if (nextBtn) nextBtn.addEventListener('click', () => {
      stopAutoPlay();
      nextSlide();
      startAutoPlay();
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
      stopAutoPlay();
      prevSlide();
      startAutoPlay();
    });

    // Pause on hover
    container.addEventListener('mouseenter', stopAutoPlay);
    container.addEventListener('mouseleave', startAutoPlay);

    // Global Animation Control
    document.addEventListener('pause-animations', stopAutoPlay);
    document.addEventListener('resume-animations', startAutoPlay);

    // Startup
    showSlide(0);
    startAutoPlay();
  });
})();

/* ==== LIGHTBOX ==== */
(function initLightbox() {
  // Create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.style.display = 'none'; // Hidden by default

  const imgElement = document.createElement('img');
  imgElement.className = 'lightbox-img';
  imgElement.style.cursor = 'zoom-in';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox-close';
  closeBtn.innerHTML = '&times;';

  const captionElement = document.createElement('div');
  captionElement.className = 'lightbox-caption';

  const prevBtn = document.createElement('button');
  prevBtn.className = 'lightbox-prev';
  prevBtn.innerHTML = '❮';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'lightbox-next';
  nextBtn.innerHTML = '❯';

  overlay.appendChild(imgElement);
  overlay.appendChild(closeBtn);
  overlay.appendChild(captionElement);
  overlay.appendChild(prevBtn);
  overlay.appendChild(nextBtn);
  document.body.appendChild(overlay);

  let currentGroup = [];
  let currentGroupIndex = -1;

  // Functions
  const openLightbox = (index, isNavigation = false) => {
    currentGroupIndex = index;
    const img = currentGroup[currentGroupIndex];
    if (!img) return;

    const updateContent = () => {
      imgElement.src = img.src;

      // Reset zoom state
      imgElement.classList.remove('zoomed');
      overlay.classList.remove('zoomed-mode');
      imgElement.style.cursor = 'zoom-in';

      // Get caption
      let captionText = '';
      const figure = img.closest('figure');
      if (figure) {
        const figcaption = figure.querySelector('figcaption');
        if (figcaption) {
          captionText = figcaption.textContent;
        }
      }
      if (!captionText && img.alt) {
        captionText = img.alt;
      }
      
      captionElement.textContent = captionText;
      captionElement.style.display = captionText ? 'block' : 'none';

      // Show/hide navigation arrows
      if (currentGroup.length > 1) {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
      } else {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
      }
    };

    if (isNavigation) {
      // Smooth transition for navigation
      imgElement.classList.add('lightbox-changing');
      captionElement.classList.add('lightbox-changing');

      setTimeout(() => {
        updateContent();
        
        // Remove changing class after image is loaded to avoid visual flashes
        const onImageLoad = () => {
          imgElement.classList.remove('lightbox-changing');
          captionElement.classList.remove('lightbox-changing');
          imgElement.removeEventListener('load', onImageLoad);
        };
        imgElement.addEventListener('load', onImageLoad);
        // Fallback safety timeout
        setTimeout(() => {
          imgElement.classList.remove('lightbox-changing');
          captionElement.classList.remove('lightbox-changing');
          imgElement.removeEventListener('load', onImageLoad);
        }, 1000);
      }, 200); // matches the CSS transition duration
    } else {
      // First open: trigger overlay and zoom entry animations
      updateContent();
      overlay.style.display = 'flex';
      
      overlay.style.animation = 'none';
      imgElement.style.animation = 'none';
      void overlay.offsetWidth; // force reflow

      overlay.style.animation = 'fadeIn 0.3s forwards';
      imgElement.style.animation = 'zoomIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';

      // Pause other animations (carousel)
      document.dispatchEvent(new Event('pause-animations'));
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
  };

  const closeLightbox = () => {
    overlay.style.animation = 'fadeOut 0.3s forwards';
    setTimeout(() => {
      overlay.style.display = 'none';
      imgElement.src = '';
      imgElement.classList.remove('zoomed');
      overlay.classList.remove('zoomed-mode');
    }, 300); // Match animation duration

    // Resume animations
    document.dispatchEvent(new Event('resume-animations'));
    document.body.style.overflow = '';
  };

  // Event Listeners
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === closeBtn) {
      closeLightbox();
    }
  });

  imgElement.addEventListener('click', (e) => {
    e.stopPropagation();
    if (imgElement.classList.contains('zoomed')) {
      imgElement.classList.remove('zoomed');
      overlay.classList.remove('zoomed-mode');
      imgElement.style.cursor = 'zoom-in';
    } else {
      imgElement.classList.add('zoomed');
      overlay.classList.add('zoomed-mode');
      imgElement.style.cursor = 'zoom-out';
    }
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentGroup.length > 1) {
      const prevIndex = (currentGroupIndex - 1 + currentGroup.length) % currentGroup.length;
      openLightbox(prevIndex, true);
    }
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentGroup.length > 1) {
      const nextIndex = (currentGroupIndex + 1) % currentGroup.length;
      openLightbox(nextIndex, true);
    }
  });

  // Close or navigate on keydown
  document.addEventListener('keydown', (e) => {
    if (overlay.style.display === 'flex' || overlay.style.display === 'block') {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight' && currentGroup.length > 1) {
        const nextIndex = (currentGroupIndex + 1) % currentGroup.length;
        openLightbox(nextIndex, true);
      } else if (e.key === 'ArrowLeft' && currentGroup.length > 1) {
        const prevIndex = (currentGroupIndex - 1 + currentGroup.length) % currentGroup.length;
        openLightbox(prevIndex, true);
      }
    }
  });

  // Attach to images
  const attachLightbox = () => {
    const selectors = [
      'figure img',
      '.carousel-slide img',
      '.img-lg',
      '.img-md',
      '.img-sm'
    ];
    const images = document.querySelectorAll(selectors.join(','));

    images.forEach(img => {
      if (img.closest('a')) return; // Don't override links
      if (img.classList.contains('no-lightbox')) return;

      img.classList.add('clickable-zoom');
      img.addEventListener('click', () => {
        const carousel = img.closest('.carousel-container');
        if (carousel) {
          currentGroup = Array.from(carousel.querySelectorAll('.carousel-slide img'));
        } else {
          currentGroup = [img];
        }
        const index = currentGroup.indexOf(img);
        openLightbox(index >= 0 ? index : 0);
      });
    });
  };

  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachLightbox);
  } else {
    attachLightbox();
  }

})();

// Event delegation to rewrite any links to missions.html to Notion
(function() {
  const notionUrl = 'https://melodic-sense-18f.notion.site/Missions-prendre-2d4d9253bfce807385c6cf8e08bbe4d6';
  const rewriteLink = (link) => {
    if (link && link.getAttribute('href') && link.getAttribute('href').includes('missions.html')) {
      link.href = notionUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  };

  document.addEventListener('mouseover', (e) => rewriteLink(e.target.closest('a')));
  document.addEventListener('focusin', (e) => rewriteLink(e.target.closest('a')));
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.getAttribute('href') && link.getAttribute('href').includes('missions.html')) {
      rewriteLink(link);
    }
  });
})();
