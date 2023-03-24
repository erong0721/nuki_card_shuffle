/**
 * Copyright 2023 Kazumasa Yamashita
 * Released under the MIT License
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.AMD ? define(factory) : (global = global || self, global.NukiCardShuffle = factory());
}(this, function () {
  'use strict';
  class NukiCardShuffle {
    constructor(selector, options) {
      const check = document.querySelector('.nuki-card-shuffle-container')
      if (check != null) {
        throw new Error('Only one class can exist.')
      }
      const dom = document.querySelector(selector)
      if (!dom) {
        throw new Error('can not find selector.')
      }
      if (options.length != 3) {
        throw new Error('options size is 3 only.')
      }
      const top = `
        <div class="nuki-card-shuffle-container">
          <ul class="nuki-card-shuffle-list">
      `
      const li = options.map((option) => {
        return `
          <li class="nuki-card-shuffle-card">
            <a
              href="${option.affiliateURL}"
              target="_blank"
            >
              <div class="nuki-card-shuffle-media">
                <img
                  src="${option.imageURL_small}"
                  alt="${option.title}"
                >
              </div>
            </a>
            <div class="nuki-card-shuffle-content">
              <a
                href="${option.affiliateURL}"
                target="_blank"
              >
                ${option.title.substring(0, 20)}...
              </a>
              <p class="nuki-card-shuffle-review">
                <span data-rate="${option.review_average}"></span>（${option.review_count}）
              </p>
              <p class="nuki-card-shuffle-button">
                <button
                  type="button"
                  data-video="${option.sampleMovieURL_size_720_480}"
                > > サンプル動画を再生する</button>
              </p>
            </div>
          </li>
        `
      }).join('')
      const bottom = `
          </ul>
        </div>
        <div class="nuki-card-shuffle-modal">
          <div class="nuki-card-shuffle-modal-content">
            <span class="nuki-card-shuffle-modal-close">×</span>
            <iframe
              class="nuki-card-shuffle-modal-video"
              src=""
              width="720"
              height="480"
            ></iframe>
          </div>
        </div>
      `
      dom.innerHTML = top + li + bottom
      const buttons = document.querySelectorAll('.nuki-card-shuffle-button button')
      const video = document.querySelector('.nuki-card-shuffle-modal-video')
      const modal = document.querySelector('.nuki-card-shuffle-modal')
      const close = document.querySelector('.nuki-card-shuffle-modal-close')
      buttons.forEach(function (e) {
        e.addEventListener('click', () => {
          video.src = e.dataset.video
          modal.style.display = 'block'
        })
      })
      close.addEventListener('click', () => {
        video.src = ''
        modal.style.display = 'none'
      })
      addEventListener('click', (e) => {
        if (e.target == modal) {
          video.src = ''
          modal.style.display = 'none';
        }
      })
    }
    open() {
      const cards = document.querySelectorAll('.nuki-card-shuffle-card')
      cards.forEach((e, i) => setTimeout(() => e.classList.add(`ani${i}`), i * 150))
    }
    close() {
      const cards = document.querySelectorAll('.nuki-card-shuffle-card')
      cards.forEach((e, i) => setTimeout(() => e.classList.remove(`ani${i}`), i * 150))
    }
    toggle() {
      const cards = document.querySelectorAll('.nuki-card-shuffle-card')
      cards.forEach((e, i) => setTimeout(() => e.classList.toggle(`ani${i}`), i * 150))
    }
  }
  return NukiCardShuffle
}))