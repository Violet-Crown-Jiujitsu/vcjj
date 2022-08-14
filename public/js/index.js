
console.log('hellow')
// AOS
jQuery(document).ready(function () {
  AOS.init();
  window.addEventListener("load", function () {
    if (typeof AOS === 'object' && AOS !== null) {
      AOS.refresh();
    }
  });
});

// fade in page
function fadeInPage() {
  if (!window.AnimationEvent) { return; }
  var fader = document.getElementById('fader');
  fader.classList.add('fade-out');
}

document.addEventListener('DOMContentLoaded', function () {
  if (!window.AnimationEvent) { return }

  var anchors = document.getElementsByTagName('a');

  for (var idx = 0; idx < anchors.length; idx += 1) {
    if (anchors[idx].hostname !== window.location.hostname ||
      anchors[idx].pathname === window.location.pathname) {
      continue;
    }

    anchors[idx].addEventListener('click', function (event) {
      var fader = document.getElementById('fader'),
        anchor = event.currentTarget;

      var listener = function () {
        window.location = anchor.href;
        fader.removeEventListener('animationend', listener);
      };
      fader.addEventListener('animationend', listener);

      event.preventDefault();
      fader.classList.add('fade-in');
    });
  }
});

window.addEventListener('pageshow', function (event) {
  if (!event.persisted) {
    return;
  }
  var fader = document.getElementById('fader');
  fader.classList.remove('fade-in');
});

// New REMOVE CPCSS
var wprRemoveCPCSS = function wprRemoveCPCSS() { var elem; document.querySelector('link[data-rocket-async="style"][rel="preload"]') ? setTimeout(wprRemoveCPCSS, 200) : (elem = document.getElementById("rocket-critical-css")) && "remove" in elem && elem.remove() }; window.addEventListener ? window.addEventListener("load", wprRemoveCPCSS) : window.attachEvent && window.attachEvent("onload", wprRemoveCPCSS);


jQuery(document).ready(function ($) {
  console.log('this loaded')
  $('#wp-admin-bar-my-sites-search.hide-if-no-js').show();
  $('#wp-admin-bar-my-sites-search input').keyup(function () {
    var searchValRegex = new RegExp($(this).val(), 'i');
    $('#wp-admin-bar-my-sites-list > li.menupop').hide().filter(function () {
      return searchValRegex.test($(this).find('> a').text());
    }).show();
  });
});


// New LazyLoad
window.lazyLoadOptions = { elements_selector: "img[data-lazy-src],.rocket-lazyload", data_src: "lazy-src", data_srcset: "lazy-srcset", data_sizes: "lazy-sizes", class_loading: "lazyloading", class_loaded: "lazyloaded", threshold: 300, callback_loaded: function (element) { if (element.tagName === "IFRAME" && element.dataset.rocketLazyload == "fitvidscompatible") { if (element.classList.contains("lazyloaded")) { if (typeof window.jQuery != "undefined") { if (jQuery.fn.fitVids) { jQuery(element).parent().fitVids() } } } } } }; window.addEventListener('LazyLoad::Initialized', function (e) {
  var lazyLoadInstance = e.detail.instance; if (window.MutationObserver) {
    var observer = new MutationObserver(function (mutations) {
      var image_count = 0; var iframe_count = 0; var rocketlazy_count = 0; mutations.forEach(function (mutation) {
        for (i = 0; i < mutation.addedNodes.length; i++) {
          if (typeof mutation.addedNodes[i].getElementsByTagName !== 'function') { continue }
          if (typeof mutation.addedNodes[i].getElementsByClassName !== 'function') { continue }
          images = mutation.addedNodes[i].getElementsByTagName('img'); is_image = mutation.addedNodes[i].tagName == "IMG"; iframes = mutation.addedNodes[i].getElementsByTagName('iframe'); is_iframe = mutation.addedNodes[i].tagName == "IFRAME"; rocket_lazy = mutation.addedNodes[i].getElementsByClassName('rocket-lazyload'); image_count += images.length; iframe_count += iframes.length; rocketlazy_count += rocket_lazy.length; if (is_image) { image_count += 1 }
          if (is_iframe) { iframe_count += 1 }
        }
      }); if (image_count > 0 || iframe_count > 0 || rocketlazy_count > 0) { lazyLoadInstance.update() }
    }); var b = document.getElementsByTagName("body")[0]; var config = { childList: !0, subtree: !0 }; observer.observe(b, config)
  }
}, !1)

// inits

fadeInPage()