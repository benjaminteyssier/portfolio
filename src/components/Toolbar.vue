<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
      return {
        experienceShakes: false,
        projectsShakes: false,
        contactShakes: false,
        aboutShakes: false,
        timeout:1000,
        about: false
      }
  },
  methods: {
    experienceShake() {
      this.experienceShakes = true
      setTimeout(() => {
        this.experienceShakes = false
      }, this.timeout)
    },
    projectsShake() {
      this.projectsShakes = true
      setTimeout(() => {
        this.projectsShakes = false
      }, this.timeout)
    },
    aboutShake() {
      this.aboutShakes = true
      this.about = true
      setTimeout(() => {
        this.aboutShakes = false
      }, this.timeout)
    },
    contactShake() {
      this.contactShakes = true
      setTimeout(() => {
        this.contactShakes = false
      }, this.timeout)
    }
  }
})
</script>

<template>
    <div id="toolbar" class="topnav">
      <div class="topnav-right">
          <a class="about" :class="{ shake: aboutShakes }" href="#" @click="aboutShake">About Me</a>
          <a class="experience" :class="{ shake: experienceShakes }" href="#" @click="experienceShake">Experience</a>
          <a class="projects" :class="{ shake: projectsShakes }" href="#" @click="projectsShake">Projects</a>
          <a class="contact" :class="{ shake: contactShakes }" href="#" @click="contactShake">Contact</a>
      </div>
    </div>
</template>

<style scoped>
.topnav {
    overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #5c5c5c;
  text-align: right;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 25px;
  background: linear-gradient(currentColor, currentColor) bottom / 0 .1em no-repeat;
	transition: 1s background-size;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
  background-size: 100% .1em;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

/* Right-aligned section inside the top navigation */
.topnav-right {
  float: right;
}

body {
  background-image: url('images/background.jpg');
  background-size: cover;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
