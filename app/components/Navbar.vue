<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-[70px] md:h-20">
        <!-- Logo -->
        <ULink
          :to="localePath('/')"
          class="text-xl md:text-2xl font-bold flex items-center gap-2 relative z-10 text-white"
        >
          <img src="/img/logo.png" alt="Frizbee Logo" class="w-7 h-7 md:w-8 md:h-8" />
          <span class="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
          >FRIZBEE</span
          >
        </ULink>

        <!-- Navigation Links - Centered -->
        <div
          class="hidden md:flex items-center gap-4 lg:gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <ULink
            v-for="link in navLinks"
            :key="link.to"
            :to="localePath(link.to)"
            class="transition-all duration-300 hover:text-amber-400 text-sm lg:text-base whitespace-nowrap"
            active-class="text-amber-400 font-bold"
            inactive-class="text-slate-200"
          >
            {{ $t(`nav.${link.key}`) }}
          </ULink>
          <LanguageSwitcher />
        </div>

        <!-- Right Actions -->
        <div class="hidden md:flex items-center">
          <ULink
            :to="localePath('/contact')"
            class="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-4 lg:px-6 py-2 rounded-full text-sm font-semibold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
          >
            {{ $t('nav.contact') }}
          </ULink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none"
          aria-label="Toggle menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="sr-only">{{ isMenuOpen ? 'Close menu' : 'Open menu' }}</span>
          <span
            class="block w-5 h-0.5 bg-amber-400 absolute transition-all duration-300"
            :class="isMenuOpen ? 'rotate-45' : '-translate-y-1.5'"
          ></span>
          <span
            class="block w-5 h-0.5 bg-amber-400 absolute transition-all duration-300"
            :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"
          ></span>
          <span
            class="block w-5 h-0.5 bg-amber-400 absolute transition-all duration-300"
            :class="isMenuOpen ? '-rotate-45' : 'translate-y-1.5'"
          ></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        class="md:hidden fixed left-0 right-0 top-[70px] bg-slate-900/95 backdrop-blur-md border-b border-slate-700 transform transition-all duration-300 ease-in-out overflow-auto"
        :class="isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'"
        style="z-index: 40"
      >
        <div class="container mx-auto px-4 py-6 flex flex-col gap-6">
          <ULink
            v-for="link in navLinks"
            :key="link.to"
            :to="localePath(link.to)"
            class="text-lg transition-all duration-300 hover:text-amber-400 transform hover:translate-x-2"
            active-class="text-amber-400 font-bold"
            inactive-class="text-slate-200"
            @click="isMenuOpen = false"
          >
            {{ $t(`nav.${link.key}`) }}
          </ULink>
          <div class="flex items-center justify-between pt-4 border-t border-slate-700">
            <LanguageSwitcher />
            <ULink
              :to="localePath('/contact')"
              class="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold hover:from-amber-500 hover:to-amber-600 hover:scale-105 transition-all duration-300 shadow-md"
              @click="isMenuOpen = false"
            >
              {{ $t('nav.contact') }}
            </ULink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const isMenuOpen = ref(false)

const navLinks = [
  { to: '/', key: 'home' },
  { to: '/services', key: 'services' },
  { to: '/portfolio', key: 'portfolio' },
  { to: '/pricing', key: 'pricing' },
  { to: '/about', key: 'about' }
]
</script>
