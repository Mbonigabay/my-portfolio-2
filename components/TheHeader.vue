<template>
    <header>
      <div class="menu-btn">
        <div class="btn-line"></div>
        <div class="btn-line"></div>
        <div class="btn-line"></div>
      </div>

      <nav class="menu">
        <div class="menu-branding">
          <div class="portrait"></div>
        </div>
        <ul class="menu-nav">
          <li class="nav-item current">
            <nuxt-link to="/" class="nav-link">
              Home
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="about" class="nav-link">
              About Me
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="work" class="nav-link">
              My Work
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="contact" class="nav-link">
              How To Reach Me
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
</template>