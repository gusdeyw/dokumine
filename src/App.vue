<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <header> -->
  <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

  <!-- <div class="wrapper"> -->
  <!-- <HelloWorld msg="You did it!" /> -->

  <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
  <!-- </div> -->
  <!-- </header> -->

  <!-- <RouterView /> -->
  <div class="min-h-screen bg-blue-50">
    <aside
      class="bg-[#35444c] -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
      <div class="relative border-b border-white/20"><a class="flex items-center gap-4 py-6 px-8" href="#/"><img
            src="/logo.png" class="inline-block relative object-cover object-center w-9 h-9 rounded-md">
          <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
            Dokumine</h6>
        </a><button
          class="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          type="button"><span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><svg
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
              aria-hidden="true" class="h-5 w-5 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg></span></button></div>
      <div class="m-4">
        <ul class="mb-4 flex flex-col gap-1">
          <li><a aria-current="page" class="active" href="#/dashboard/home"><button
                class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  aria-hidden="true" class="w-5 h-5 text-inherit">
                  <path
                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z">
                  </path>
                  <path
                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z">
                  </path>
                </svg>
                <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  dashboard</p>
              </button></a></li>
          <li><a class="" href="#/dashboard/profile"><button
                class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  aria-hidden="true" class="w-5 h-5 text-inherit">
                  <path fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  profile</p>
              </button></a></li>
          <li><a class="" href="#/dashboard/tables"><button
                class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  aria-hidden="true" class="w-5 h-5 text-inherit">
                  <path fill-rule="evenodd"
                    d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z"
                    clip-rule="evenodd"></path>
                </svg>
                <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  tables</p>
              </button></a></li>
          <li><a class="" href="#/dashboard/notifactions"><button
                class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  aria-hidden="true" class="w-5 h-5 text-inherit">
                  <path fill-rule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  notifactions</p>
              </button></a></li>
        </ul>
        <ul class="mb-4 flex flex-col gap-1">
          <li class="mx-3.5 mt-4 mb-2">
            <p class="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">auth
              pages</p>
          </li>
          <li><a class="" href="#/auth/sign-in"><button
                class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  aria-hidden="true" class="w-5 h-5 text-inherit">
                  <path fill-rule="evenodd"
                    d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                    clip-rule="evenodd"></path>
                </svg>
                <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">sign
                  in</p>
              </button></a></li>
          <li><a class="" href="#/auth/sign-up"><button
                class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  aria-hidden="true" class="w-5 h-5 text-inherit">
                  <path
                    d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z">
                  </path>
                </svg>
                <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">sign
                  up</p>
              </button></a></li>
        </ul>
      </div>
    </aside>
    <div class="p-4 xl:ml-80">
      <nav class="block w-full max-w-full bg-transparent  shadow-none rounded-xl transition-all px-0 py-1">
        <div class="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
          <div class="capitalize">
            <nav aria-label="breadcrumb" class="w-max">
              <ol class="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                <li
                  class="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                  <a href="#/dashboard">
                    <p
                      class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">
                      dashboard</p>
                  </a><span
                    class="text-blue-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">/</span>
                </li>
                <li
                  class="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                  <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">home</p>
                </li>
              </ol>
            </nav>
            <h6
              class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
              home</h6>
          </div>
          <div class="flex items-center">
            <div class="mr-auto md:mr-4 md:w-56">
              <div class="relative w-full min-w-[200px] h-10"><input
                  class="peer w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-200 focus:border-blue-500"
                  placeholder=" "><label
                  class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">Type
                  here</label></div>
            </div><button
              class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
              type="button"><span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                  stroke-width="3" class="h-6 w-6 text-blue-gray-500">
                  <path fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"></path>
                </svg></span></button><a href="#/auth/sign-in"><button
                class="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 hidden items-center gap-1 px-4 xl:flex"
                type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  aria-hidden="true" class="h-5 w-5 text-blue-gray-500">
                  <path fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clip-rule="evenodd"></path>
                </svg>Sign In</button><button
                class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
                type="button"><span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                    class="h-5 w-5 text-blue-gray-500">
                    <path fill-rule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clip-rule="evenodd"></path>
                  </svg></span></button></a><button
              class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
              type="button"><span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                  class="h-5 w-5 text-blue-gray-500">
                  <path fill-rule="evenodd"
                    d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                    clip-rule="evenodd"></path>
                </svg></span></button><button aria-expanded="false" aria-haspopup="menu" id=":r2:"
              class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
              type="button"><span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                  class="h-5 w-5 text-blue-gray-500">
                  <path fill-rule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                    clip-rule="evenodd"></path>
                </svg></span></button>
          </div>
        </div>
      </nav>
      <aside
        class="fixed top-0 right-0 z-50 h-screen w-96 bg-white px-2.5 shadow-lg transition-transform duration-300 translate-x-96">
        <div class="flex items-start justify-between px-6 pt-8 pb-6">
          <div>
            <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900">
              Dashboard Configurator</h5>
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">See our
              dashboard options.</p>
          </div><button
            class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
            type="button"><span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                stroke="currentColor" aria-hidden="true" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg></span></button>
        </div>
        <div class="py-4 px-6">
          <div class="mb-12">
            <h6
              class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
              Sidenav Colors</h6>
            <div class="mt-3 flex items-center gap-2"><span
                class="h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105 from-blue-400 to-blue-600 border-black"></span><span
                class="h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105 from-blue-gray-800 to-blue-gray-900 border-transparent"></span><span
                class="h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105 from-green-400 to-green-600 border-transparent"></span><span
                class="h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105 from-orange-400 to-orange-600 border-transparent"></span><span
                class="h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105 from-red-400 to-red-600 border-transparent"></span><span
                class="h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105 from-pink-400 to-pink-600 border-transparent"></span>
            </div>
          </div>
          <div class="mb-12">
            <h6
              class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
              Sidenav Types</h6>
            <p class="block antialiased font-sans text-sm font-light leading-normal text-gray-700">Choose between 3
              different sidenav types.</p>
            <div class="mt-3 flex items-center gap-2"><button
                class="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85]"
                type="button">Dark</button><button
                class="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-blue-500 text-blue-500 hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85]"
                type="button">Transparent</button><button
                class="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-blue-500 text-blue-500 hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85]"
                type="button">White</button></div>
          </div>
          <div class="mb-12">
            <hr>
            <div class="flex items-center justify-between py-5">
              <h6
                class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
                Navbar Fixed</h6>
              <div class="inline-flex items-center">
                <div class="relative inline-block w-8 h-4 cursor-pointer rounded-full"><input id="navbar-fixed"
                    type="checkbox"
                    class="peer appearance-none w-8 h-4 absolute bg-blue-gray-100 rounded-full cursor-pointer transition-colors duration-300 checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:before:bg-blue-500"
                    value="false"><label for="navbar-fixed"
                    class="bg-white w-5 h-5 border border-blue-gray-100 rounded-full shadow-md absolute top-2/4 -left-1 -translate-y-2/4 peer-checked:translate-x-full transition-all duration-300 cursor-pointer before:content[''] before:block before:bg-blue-gray-500 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:transition-opacity before:opacity-0 hover:before:opacity-10 peer-checked:border-blue-500 peer-checked:before:bg-blue-500">
                    <div class="inline-block top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-5 rounded-full"></div>
                  </label></div>
              </div>
            </div>
            <hr>
            <div class="my-8 flex flex-col gap-4"><a
                href="https://www.creative-tim.com/product/material-tailwind-dashboard-react?rel=mtdr"
                target="_black"><button
                  class="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] block w-full"
                  type="button">Free Download</button></a><a
                href="https://www.material-tailwind.com/docs/react/installation?rel=mtdr" target="_black"><button
                  class="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-blue-gray-500 text-blue-gray-500 hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] block w-full"
                  type="button">View Documentation</button></a><a
                href="https://www.material-tailwind.com/blocks/react?rel=mtdr" target="_black"><button
                  class="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-blue-gray-500 text-blue-gray-500 hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] block w-full"
                  type="button">Material Tailwind PRO</button></a></div><a
              class="mx-auto flex items-center justify-center gap-2"
              href="https://github.com/creativetimofficial/material-tailwind-dashboard-react" target="_blank"
              rel="noreferrer">
              <div
                class="relative inline-block align-baseline font-sans text-xs font-bold uppercase center leading-none whitespace-nowrap py-2 rounded-lg select-none text-white bg-blue-gray-900 px-4"
                style="opacity: 1;">
                <div class="w-5 h-5 absolute top-2/4 left-1 -translate-y-2/4"><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor" class="mt-px ml-1.5 h-4 w-4">
                    <path fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"></path>
                  </svg></div>
                <div class="ml-4  mt-px">177 - Stars</div>
              </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
                </path>
              </svg>
            </a>
          </div>
          <div class="text-center">
            <h6
              class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
              Thank you for sharing ❤️</h6>
            <div class="mt-4 flex justify-center gap-2"><button
                class="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-white shadow-md shadow-blue-gray-500/20 hover:shadow-lg hover:shadow-blue-gray-500/40 active:opacity-[0.85] flex items-center gap-2"
                type="button"><i class="fa-brands fa-twitter text-white"></i>Tweet</button><button
                class="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-white shadow-md shadow-blue-gray-500/20 hover:shadow-lg hover:shadow-blue-gray-500/40 active:opacity-[0.85] flex items-center gap-2"
                type="button"><i class="fa-brands fa-facebook text-white"></i>Share</button></div>
          </div>
        </div>
      </aside><button
        class="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-sm bg-white text-blue-gray-900 shadow-md hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
        type="button"><span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 w-5">
            <path fill-rule="evenodd"
              d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
              clip-rule="evenodd"></path>
          </svg></span></button>
      <div class="mt-12">
        <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
          <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                class="w-6 h-6 text-white">
                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                <path fill-rule="evenodd"
                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                  clip-rule="evenodd"></path>
                <path
                  d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z">
                </path>
              </svg>
            </div>
            <div class="p-4 text-right">
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Today's Money
              </p>
              <h4
                class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                $53k</h4>
            </div>
            <div class="border-t border-blue-gray-50 p-4">
              <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600"><strong
                  class="text-green-500">+55%</strong>&nbsp;than last week</p>
            </div>
          </div>
          <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                class="w-6 h-6 text-white">
                <path fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="p-4 text-right">
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Today's Users
              </p>
              <h4
                class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                2,300</h4>
            </div>
            <div class="border-t border-blue-gray-50 p-4">
              <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600"><strong
                  class="text-green-500">+3%</strong>&nbsp;than last month</p>
            </div>
          </div>
          <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                class="w-6 h-6 text-white">
                <path
                  d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z">
                </path>
              </svg>
            </div>
            <div class="p-4 text-right">
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">New Clients</p>
              <h4
                class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                3,462</h4>
            </div>
            <div class="border-t border-blue-gray-50 p-4">
              <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600"><strong
                  class="text-red-500">-2%</strong>&nbsp;than yesterday</p>
            </div>
          </div>
          <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                class="w-6 h-6 text-white">
                <path
                  d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z">
                </path>
              </svg>
            </div>
            <div class="p-4 text-right">
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Sales</p>
              <h4
                class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                $103,430</h4>
            </div>
            <div class="border-t border-blue-gray-50 p-4">
              <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600"><strong
                  class="text-green-500">+5%</strong>&nbsp;than yesterday</p>
            </div>
          </div>
        </div>
        <!-- <div class="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
          <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              class="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6">
              <div style="min-height: 235px;">
                <div id="apexcharts4rbnwc7h" class="apexcharts-canvas apexcharts4rbnwc7h apexcharts-theme-light"
                  style="width: 256px; height: 220px;"><svg id="SvgjsSvg1652" width="256" height="220"
                    xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS"
                    transform="translate(0, 0)" style="background: transparent;">
                    <g id="SvgjsG1654" class="apexcharts-inner apexcharts-graphical"
                      transform="translate(41.63313865661621, 35)">
                      <defs id="SvgjsDefs1653">
                        <linearGradient id="SvgjsLinearGradient1658" x1="0" y1="0" x2="0" y2="1">
                          <stop id="SvgjsStop1659" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0">
                          </stop>
                          <stop id="SvgjsStop1660" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1">
                          </stop>
                          <stop id="SvgjsStop1661" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1">
                          </stop>
                        </linearGradient>
                        <clipPath id="gridRectMask4rbnwc7h">
                          <rect id="SvgjsRect1663" width="198.3668613433838" height="146.269332818985" x="-2" y="0" rx="0"
                            ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                        </clipPath>
                        <clipPath id="forecastMask4rbnwc7h"></clipPath>
                        <clipPath id="nonForecastMask4rbnwc7h"></clipPath>
                        <clipPath id="gridRectMarkerMask4rbnwc7h">
                          <rect id="SvgjsRect1664" width="198.3668613433838" height="150.269332818985" x="-2" y="-2"
                            rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff">
                          </rect>
                        </clipPath>
                      </defs>
                      <rect id="SvgjsRect1662" width="4.442671116420201" height="146.269332818985" x="0" y="0" rx="0"
                        ry="0" opacity="1" stroke-width="0" stroke-dasharray="3" fill="url(#SvgjsLinearGradient1658)"
                        class="apexcharts-xcrosshairs" y2="146.269332818985" filter="none" fill-opacity="0.9"></rect>
                      <g id="SvgjsG1683" class="apexcharts-xaxis" transform="translate(0, 0)">
                        <g id="SvgjsG1684" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text
                            id="SvgjsText1686" font-family="inherit" x="13.883347238813128" y="175.269332818985"
                            text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="300"
                            fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label " style="font-family: inherit;">
                            <tspan id="SvgjsTspan1687">M</tspan>
                            <title>M</title>
                          </text><text id="SvgjsText1689" font-family="inherit" x="41.65004171643938" y="175.269332818985"
                            text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="300"
                            fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label " style="font-family: inherit;">
                            <tspan id="SvgjsTspan1690">T</tspan>
                            <title>T</title>
                          </text><text id="SvgjsText1692" font-family="inherit" x="69.41673619406563" y="175.269332818985"
                            text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="300"
                            fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label " style="font-family: inherit;">
                            <tspan id="SvgjsTspan1693">W</tspan>
                            <title>W</title>
                          </text><text id="SvgjsText1695" font-family="inherit" x="97.1834306716919" y="175.269332818985"
                            text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="300"
                            fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label " style="font-family: inherit;">
                            <tspan id="SvgjsTspan1696">T</tspan>
                            <title>T</title>
                          </text><text id="SvgjsText1698" font-family="inherit" x="124.95012514931814"
                            y="175.269332818985" text-anchor="middle" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;">
                            <tspan id="SvgjsTspan1699">F</tspan>
                            <title>F</title>
                          </text><text id="SvgjsText1701" font-family="inherit" x="152.7168196269444" y="175.269332818985"
                            text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="300"
                            fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label " style="font-family: inherit;">
                            <tspan id="SvgjsTspan1702">S</tspan>
                            <title>S</title>
                          </text><text id="SvgjsText1704" font-family="inherit" x="180.48351410457067"
                            y="175.269332818985" text-anchor="middle" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;">
                            <tspan id="SvgjsTspan1705">S</tspan>
                            <title>S</title>
                          </text></g>
                      </g>
                      <g id="SvgjsG1726" class="apexcharts-grid">
                        <g id="SvgjsG1727" class="apexcharts-gridlines-horizontal">
                          <line id="SvgjsLine1737" x1="0" y1="0" x2="194.3668613433838" y2="0" stroke="#ffffff40"
                            stroke-dasharray="5" stroke-linecap="butt" class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1738" x1="0" y1="29.253866563796997" x2="194.3668613433838"
                            y2="29.253866563796997" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1739" x1="0" y1="58.507733127593994" x2="194.3668613433838"
                            y2="58.507733127593994" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1740" x1="0" y1="87.76159969139098" x2="194.3668613433838"
                            y2="87.76159969139098" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1741" x1="0" y1="117.01546625518799" x2="194.3668613433838"
                            y2="117.01546625518799" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1742" x1="0" y1="146.269332818985" x2="194.3668613433838"
                            y2="146.269332818985" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                        </g>
                        <g id="SvgjsG1728" class="apexcharts-gridlines-vertical">
                          <line id="SvgjsLine1729" x1="0" y1="0" x2="0" y2="146.269332818985" stroke="#ffffff40"
                            stroke-dasharray="5" stroke-linecap="butt" class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1730" x1="27.766694477626256" y1="0" x2="27.766694477626256"
                            y2="146.269332818985" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1731" x1="55.53338895525251" y1="0" x2="55.53338895525251"
                            y2="146.269332818985" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1732" x1="83.30008343287876" y1="0" x2="83.30008343287876"
                            y2="146.269332818985" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1733" x1="111.06677791050502" y1="0" x2="111.06677791050502"
                            y2="146.269332818985" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1734" x1="138.83347238813127" y1="0" x2="138.83347238813127"
                            y2="146.269332818985" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1735" x1="166.60016686575753" y1="0" x2="166.60016686575753"
                            y2="146.269332818985" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1736" x1="194.3668613433838" y1="0" x2="194.3668613433838"
                            y2="146.269332818985" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                        </g>
                        <line id="SvgjsLine1744" x1="0" y1="146.269332818985" x2="194.3668613433838" y2="146.269332818985"
                          stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                        <line id="SvgjsLine1743" x1="0" y1="1" x2="0" y2="146.269332818985" stroke="transparent"
                          stroke-dasharray="0" stroke-linecap="butt"></line>
                      </g>
                      <g id="SvgjsG1665" class="apexcharts-bar-series apexcharts-plot-series">
                        <g id="SvgjsG1666" class="apexcharts-series" rel="1" seriesName="Views" data:realIndex="0">
                          <path id="SvgjsPath1670"
                            d="M 11.662011680603028 146.269332818985L 11.662011680603028 5Q 11.662011680603028 0 16.66201168060303 0L 11.10468279702323 0Q 16.10468279702323 0 16.10468279702323 5L 16.10468279702323 5L 16.10468279702323 146.269332818985L 16.10468279702323 146.269332818985z"
                            fill="rgba(255,255,255,0.8)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round"
                            stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                            clip-path="url(#gridRectMask4rbnwc7h)"
                            pathTo="M 11.662011680603028 146.269332818985L 11.662011680603028 5Q 11.662011680603028 0 16.66201168060303 0L 11.10468279702323 0Q 16.10468279702323 0 16.10468279702323 5L 16.10468279702323 5L 16.10468279702323 146.269332818985L 16.10468279702323 146.269332818985z"
                            pathFrom="M 11.662011680603028 146.269332818985L 11.662011680603028 146.269332818985L 16.10468279702323 146.269332818985L 16.10468279702323 146.269332818985L 16.10468279702323 146.269332818985L 16.10468279702323 146.269332818985L 16.10468279702323 146.269332818985L 11.662011680603028 146.269332818985"
                            cy="0" cx="39.42870615822928" j="0" val="50" barHeight="146.269332818985"
                            barWidth="4.442671116420201"></path>
                          <path id="SvgjsPath1672"
                            d="M 39.42870615822928 146.269332818985L 39.42870615822928 92.76159969139098Q 39.42870615822928 87.76159969139098 44.42870615822928 87.76159969139098L 38.87137727464948 87.76159969139098Q 43.87137727464948 87.76159969139098 43.87137727464948 92.76159969139098L 43.87137727464948 92.76159969139098L 43.87137727464948 146.269332818985L 43.87137727464948 146.269332818985z"
                            fill="rgba(255,255,255,0.8)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round"
                            stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                            clip-path="url(#gridRectMask4rbnwc7h)"
                            pathTo="M 39.42870615822928 146.269332818985L 39.42870615822928 92.76159969139098Q 39.42870615822928 87.76159969139098 44.42870615822928 87.76159969139098L 38.87137727464948 87.76159969139098Q 43.87137727464948 87.76159969139098 43.87137727464948 92.76159969139098L 43.87137727464948 92.76159969139098L 43.87137727464948 146.269332818985L 43.87137727464948 146.269332818985z"
                            pathFrom="M 39.42870615822928 146.269332818985L 39.42870615822928 146.269332818985L 43.87137727464948 146.269332818985L 43.87137727464948 146.269332818985L 43.87137727464948 146.269332818985L 43.87137727464948 146.269332818985L 43.87137727464948 146.269332818985L 39.42870615822928 146.269332818985"
                            cy="87.76159969139098" cx="67.19540063585553" j="1" val="20" barHeight="58.507733127594"
                            barWidth="4.442671116420201"></path>
                          <path id="SvgjsPath1674"
                            d="M 67.19540063585553 146.269332818985L 67.19540063585553 122.01546625518799Q 67.19540063585553 117.01546625518799 72.19540063585553 117.01546625518799L 66.63807175227574 117.01546625518799Q 71.63807175227574 117.01546625518799 71.63807175227574 122.01546625518799L 71.63807175227574 122.01546625518799L 71.63807175227574 146.269332818985L 71.63807175227574 146.269332818985z"
                            fill="rgba(255,255,255,0.8)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round"
                            stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                            clip-path="url(#gridRectMask4rbnwc7h)"
                            pathTo="M 67.19540063585553 146.269332818985L 67.19540063585553 122.01546625518799Q 67.19540063585553 117.01546625518799 72.19540063585553 117.01546625518799L 66.63807175227574 117.01546625518799Q 71.63807175227574 117.01546625518799 71.63807175227574 122.01546625518799L 71.63807175227574 122.01546625518799L 71.63807175227574 146.269332818985L 71.63807175227574 146.269332818985z"
                            pathFrom="M 67.19540063585553 146.269332818985L 67.19540063585553 146.269332818985L 71.63807175227574 146.269332818985L 71.63807175227574 146.269332818985L 71.63807175227574 146.269332818985L 71.63807175227574 146.269332818985L 71.63807175227574 146.269332818985L 67.19540063585553 146.269332818985"
                            cy="117.01546625518799" cx="94.9620951134818" j="2" val="10" barHeight="29.253866563797"
                            barWidth="4.442671116420201"></path>
                          <path id="SvgjsPath1676"
                            d="M 94.9620951134818 146.269332818985L 94.9620951134818 86.9108263786316Q 94.9620951134818 81.9108263786316 99.9620951134818 81.9108263786316L 94.404766229902 81.9108263786316Q 99.404766229902 81.9108263786316 99.404766229902 86.9108263786316L 99.404766229902 86.9108263786316L 99.404766229902 146.269332818985L 99.404766229902 146.269332818985z"
                            fill="rgba(255,255,255,0.8)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round"
                            stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                            clip-path="url(#gridRectMask4rbnwc7h)"
                            pathTo="M 94.9620951134818 146.269332818985L 94.9620951134818 86.9108263786316Q 94.9620951134818 81.9108263786316 99.9620951134818 81.9108263786316L 94.404766229902 81.9108263786316Q 99.404766229902 81.9108263786316 99.404766229902 86.9108263786316L 99.404766229902 86.9108263786316L 99.404766229902 146.269332818985L 99.404766229902 146.269332818985z"
                            pathFrom="M 94.9620951134818 146.269332818985L 94.9620951134818 146.269332818985L 99.404766229902 146.269332818985L 99.404766229902 146.269332818985L 99.404766229902 146.269332818985L 99.404766229902 146.269332818985L 99.404766229902 146.269332818985L 94.9620951134818 146.269332818985"
                            cy="81.9108263786316" cx="122.72878959110805" j="3" val="22" barHeight="64.3585064403534"
                            barWidth="4.442671116420201"></path>
                          <path id="SvgjsPath1678"
                            d="M 122.72878959110805 146.269332818985L 122.72878959110805 5Q 122.72878959110805 0 127.72878959110805 0L 122.17146070752825 0Q 127.17146070752825 0 127.17146070752825 5L 127.17146070752825 5L 127.17146070752825 146.269332818985L 127.17146070752825 146.269332818985z"
                            fill="rgba(255,255,255,0.8)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round"
                            stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                            clip-path="url(#gridRectMask4rbnwc7h)"
                            pathTo="M 122.72878959110805 146.269332818985L 122.72878959110805 5Q 122.72878959110805 0 127.72878959110805 0L 122.17146070752825 0Q 127.17146070752825 0 127.17146070752825 5L 127.17146070752825 5L 127.17146070752825 146.269332818985L 127.17146070752825 146.269332818985z"
                            pathFrom="M 122.72878959110805 146.269332818985L 122.72878959110805 146.269332818985L 127.17146070752825 146.269332818985L 127.17146070752825 146.269332818985L 127.17146070752825 146.269332818985L 127.17146070752825 146.269332818985L 127.17146070752825 146.269332818985L 122.72878959110805 146.269332818985"
                            cy="0" cx="150.4954840687343" j="4" val="50" barHeight="146.269332818985"
                            barWidth="4.442671116420201"></path>
                          <path id="SvgjsPath1680"
                            d="M 150.4954840687343 146.269332818985L 150.4954840687343 122.01546625518799Q 150.4954840687343 117.01546625518799 155.4954840687343 117.01546625518799L 149.9381551851545 117.01546625518799Q 154.9381551851545 117.01546625518799 154.9381551851545 122.01546625518799L 154.9381551851545 122.01546625518799L 154.9381551851545 146.269332818985L 154.9381551851545 146.269332818985z"
                            fill="rgba(255,255,255,0.8)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round"
                            stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                            clip-path="url(#gridRectMask4rbnwc7h)"
                            pathTo="M 150.4954840687343 146.269332818985L 150.4954840687343 122.01546625518799Q 150.4954840687343 117.01546625518799 155.4954840687343 117.01546625518799L 149.9381551851545 117.01546625518799Q 154.9381551851545 117.01546625518799 154.9381551851545 122.01546625518799L 154.9381551851545 122.01546625518799L 154.9381551851545 146.269332818985L 154.9381551851545 146.269332818985z"
                            pathFrom="M 150.4954840687343 146.269332818985L 150.4954840687343 146.269332818985L 154.9381551851545 146.269332818985L 154.9381551851545 146.269332818985L 154.9381551851545 146.269332818985L 154.9381551851545 146.269332818985L 154.9381551851545 146.269332818985L 150.4954840687343 146.269332818985"
                            cy="117.01546625518799" cx="178.26217854636056" j="5" val="10" barHeight="29.253866563797"
                            barWidth="4.442671116420201"></path>
                          <path id="SvgjsPath1682"
                            d="M 178.26217854636056 146.269332818985L 178.26217854636056 34.25386656379699Q 178.26217854636056 29.25386656379699 183.26217854636056 29.25386656379699L 177.70484966278076 29.25386656379699Q 182.70484966278076 29.25386656379699 182.70484966278076 34.25386656379699L 182.70484966278076 34.25386656379699L 182.70484966278076 146.269332818985L 182.70484966278076 146.269332818985z"
                            fill="rgba(255,255,255,0.8)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round"
                            stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                            clip-path="url(#gridRectMask4rbnwc7h)"
                            pathTo="M 178.26217854636056 146.269332818985L 178.26217854636056 34.25386656379699Q 178.26217854636056 29.25386656379699 183.26217854636056 29.25386656379699L 177.70484966278076 29.25386656379699Q 182.70484966278076 29.25386656379699 182.70484966278076 34.25386656379699L 182.70484966278076 34.25386656379699L 182.70484966278076 146.269332818985L 182.70484966278076 146.269332818985z"
                            pathFrom="M 178.26217854636056 146.269332818985L 178.26217854636056 146.269332818985L 182.70484966278076 146.269332818985L 182.70484966278076 146.269332818985L 182.70484966278076 146.269332818985L 182.70484966278076 146.269332818985L 182.70484966278076 146.269332818985L 178.26217854636056 146.269332818985"
                            cy="29.25386656379699" cx="206.02887302398682" j="6" val="40" barHeight="117.015466255188"
                            barWidth="4.442671116420201"></path>
                          <g id="SvgjsG1668" class="apexcharts-bar-goals-markers" style="pointer-events: none">
                            <g id="SvgjsG1669" className="apexcharts-bar-goals-groups"></g>
                            <g id="SvgjsG1671" className="apexcharts-bar-goals-groups"></g>
                            <g id="SvgjsG1673" className="apexcharts-bar-goals-groups"></g>
                            <g id="SvgjsG1675" className="apexcharts-bar-goals-groups"></g>
                            <g id="SvgjsG1677" className="apexcharts-bar-goals-groups"></g>
                            <g id="SvgjsG1679" className="apexcharts-bar-goals-groups"></g>
                            <g id="SvgjsG1681" className="apexcharts-bar-goals-groups"></g>
                          </g>
                        </g>
                        <g id="SvgjsG1667" class="apexcharts-datalabels" data:realIndex="0"></g>
                      </g>
                      <line id="SvgjsLine1745" x1="0" y1="0" x2="194.3668613433838" y2="0" stroke="#b6b6b6"
                        stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line>
                      <line id="SvgjsLine1746" x1="0" y1="0" x2="194.3668613433838" y2="0" stroke-dasharray="0"
                        stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line>
                      <g id="SvgjsG1747" class="apexcharts-yaxis-annotations"></g>
                      <g id="SvgjsG1748" class="apexcharts-xaxis-annotations"></g>
                      <g id="SvgjsG1749" class="apexcharts-point-annotations"></g>
                    </g>
                    <g id="SvgjsG1706" class="apexcharts-yaxis" rel="0" transform="translate(11.633138656616211, 0)">
                      <g id="SvgjsG1707" class="apexcharts-yaxis-texts-g"><text id="SvgjsText1709" font-family="inherit"
                          x="20" y="36.5" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300"
                          fill="#ffffff" class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1710">50</tspan>
                          <title>50</title>
                        </text><text id="SvgjsText1712" font-family="inherit" x="20" y="65.753866563797" text-anchor="end"
                          dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1713">40</tspan>
                          <title>40</title>
                        </text><text id="SvgjsText1715" font-family="inherit" x="20" y="95.00773312759401"
                          text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1716">30</tspan>
                          <title>30</title>
                        </text><text id="SvgjsText1718" font-family="inherit" x="20" y="124.26159969139101"
                          text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1719">20</tspan>
                          <title>20</title>
                        </text><text id="SvgjsText1721" font-family="inherit" x="20" y="153.51546625518802"
                          text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1722">10</tspan>
                          <title>10</title>
                        </text><text id="SvgjsText1724" font-family="inherit" x="20" y="182.76933281898502"
                          text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1725">0</tspan>
                          <title>0</title>
                        </text></g>
                    </g>
                    <g id="SvgjsG1655" class="apexcharts-annotations"></g>
                  </svg>
                  <div class="apexcharts-legend" style="max-height: 110px;"></div>
                  <div class="apexcharts-tooltip apexcharts-theme-dark">
                    <div class="apexcharts-tooltip-title"
                      style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div>
                    <div class="apexcharts-tooltip-series-group" style="order: 1;"><span
                        class="apexcharts-tooltip-marker"></span>
                      <div class="apexcharts-tooltip-text"
                        style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                        <div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span
                            class="apexcharts-tooltip-text-y-value"></span></div>
                        <div class="apexcharts-tooltip-goals-group"><span
                            class="apexcharts-tooltip-text-goals-label"></span><span
                            class="apexcharts-tooltip-text-goals-value"></span></div>
                        <div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span
                            class="apexcharts-tooltip-text-z-value"></span></div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                    <div class="apexcharts-yaxistooltip-text"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h6
                class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
                Website View</h6>
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Last Campaign
                Performance</p>
            </div>
            <div class="p-6 border-t border-blue-gray-50 px-6 py-5">
              <p class="antialiased font-sans text-sm leading-normal flex items-center font-normal text-blue-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-inherit">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z">
                  </path>
                </svg>&nbsp;campaign sent 2 days ago
              </p>
            </div>
          </div>
          <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              class="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg -mt-6">
              <div style="min-height: 235px;">
                <div id="apexchartsou8qswun" class="apexcharts-canvas apexchartsou8qswun apexcharts-theme-light"
                  style="width: 256px; height: 220px;"><svg id="SvgjsSvg1750" width="256" height="220"
                    xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg apexcharts-zoomable" xmlns:data="ApexChartsNS"
                    transform="translate(0, 0)" style="background: transparent;">
                    <g id="SvgjsG1752" class="apexcharts-inner apexcharts-graphical"
                      transform="translate(48.93294334411621, 35)">
                      <defs id="SvgjsDefs1751">
                        <clipPath id="gridRectMaskou8qswun">
                          <rect id="SvgjsRect1759" width="196.0670566558838" height="128.44760131835938" x="-4.5" y="-2.5"
                            rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff">
                          </rect>
                        </clipPath>
                        <clipPath id="forecastMaskou8qswun"></clipPath>
                        <clipPath id="nonForecastMaskou8qswun"></clipPath>
                        <clipPath id="gridRectMarkerMaskou8qswun">
                          <rect id="SvgjsRect1760" width="239.0670566558838" height="175.44760131835938" x="-26" y="-26"
                            rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff">
                          </rect>
                        </clipPath>
                      </defs>
                      <line id="SvgjsLine1758" x1="0" y1="0" x2="0" y2="123.44760131835938" stroke="#b6b6b6"
                        stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-xcrosshairs" x="0" y="0" width="1"
                        height="123.44760131835938" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1">
                      </line>
                      <g id="SvgjsG1783" class="apexcharts-xaxis" transform="translate(0, 0)">
                        <g id="SvgjsG1784" class="apexcharts-xaxis-texts-g" transform="translate(0, -10)"><text
                            id="SvgjsText1786" font-family="inherit" x="0" y="146.44760131835938" text-anchor="end"
                            dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                            class="apexcharts-text apexcharts-xaxis-label " style="font-family: inherit;"
                            transform="rotate(-45 1.14599609375 140.78094482421875)">
                            <tspan id="SvgjsTspan1787">Apr</tspan>
                            <title>Apr</title>
                          </text><text id="SvgjsText1789" font-family="inherit" x="23.383382081985474"
                            y="146.44760131835938" text-anchor="end" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;" transform="rotate(-45 24.623780250549316 140.78094482421875)">
                            <tspan id="SvgjsTspan1790">May</tspan>
                            <title>May</title>
                          </text><text id="SvgjsText1792" font-family="inherit" x="46.76676416397095"
                            y="146.44760131835938" text-anchor="end" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;" transform="rotate(-45 47.76676559448242 140.78094482421875)">
                            <tspan id="SvgjsTspan1793">Jun</tspan>
                            <title>Jun</title>
                          </text><text id="SvgjsText1795" font-family="inherit" x="70.15014624595642"
                            y="146.44760131835938" text-anchor="end" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;" transform="rotate(-45 71.150146484375 140.78094482421875)">
                            <tspan id="SvgjsTspan1796">Jul</tspan>
                            <title>Jul</title>
                          </text><text id="SvgjsText1798" font-family="inherit" x="93.5335283279419"
                            y="146.44760131835938" text-anchor="end" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;" transform="rotate(-45 94.53353118896484 140.78094482421875)">
                            <tspan id="SvgjsTspan1799">Aug</tspan>
                            <title>Aug</title>
                          </text><text id="SvgjsText1801" font-family="inherit" x="116.91691040992737"
                            y="146.44760131835938" text-anchor="end" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;" transform="rotate(-45 117.9788465499878 140.78094482421875)">
                            <tspan id="SvgjsTspan1802">Sep</tspan>
                            <title>Sep</title>
                          </text><text id="SvgjsText1804" font-family="inherit" x="140.30029249191284"
                            y="146.44760131835938" text-anchor="end" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;" transform="rotate(-45 141.30030345916748 140.78094482421875)">
                            <tspan id="SvgjsTspan1805">Oct</tspan>
                            <title>Oct</title>
                          </text><text id="SvgjsText1807" font-family="inherit" x="163.68367457389832"
                            y="146.44760131835938" text-anchor="end" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;" transform="rotate(-45 164.8859920501709 140.78094482421875)">
                            <tspan id="SvgjsTspan1808">Nov</tspan>
                            <title>Nov</title>
                          </text><text id="SvgjsText1810" font-family="inherit" x="187.0670566558838"
                            y="146.44760131835938" text-anchor="end" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;" transform="rotate(-45 188.0670576095581 140.78094482421875)">
                            <tspan id="SvgjsTspan1811">Dec</tspan>
                            <title>Dec</title>
                          </text></g>
                      </g>
                      <g id="SvgjsG1835" class="apexcharts-grid">
                        <g id="SvgjsG1836" class="apexcharts-gridlines-horizontal">
                          <line id="SvgjsLine1847" x1="0" y1="0" x2="187.0670566558838" y2="0" stroke="#ffffff40"
                            stroke-dasharray="5" stroke-linecap="butt" class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1848" x1="0" y1="20.574600219726562" x2="187.0670566558838"
                            y2="20.574600219726562" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1849" x1="0" y1="41.149200439453125" x2="187.0670566558838"
                            y2="41.149200439453125" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1850" x1="0" y1="61.72380065917969" x2="187.0670566558838"
                            y2="61.72380065917969" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1851" x1="0" y1="82.29840087890625" x2="187.0670566558838"
                            y2="82.29840087890625" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1852" x1="0" y1="102.87300109863281" x2="187.0670566558838"
                            y2="102.87300109863281" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1853" x1="0" y1="123.44760131835938" x2="187.0670566558838"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                        </g>
                        <g id="SvgjsG1837" class="apexcharts-gridlines-vertical">
                          <line id="SvgjsLine1838" x1="0" y1="0" x2="0" y2="123.44760131835938" stroke="#ffffff40"
                            stroke-dasharray="5" stroke-linecap="butt" class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1839" x1="23.383382081985474" y1="0" x2="23.383382081985474"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1840" x1="46.76676416397095" y1="0" x2="46.76676416397095"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1841" x1="70.15014624595642" y1="0" x2="70.15014624595642"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1842" x1="93.5335283279419" y1="0" x2="93.5335283279419"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1843" x1="116.91691040992737" y1="0" x2="116.91691040992737"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1844" x1="140.30029249191284" y1="0" x2="140.30029249191284"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1845" x1="163.68367457389832" y1="0" x2="163.68367457389832"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1846" x1="187.0670566558838" y1="0" x2="187.0670566558838"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                        </g>
                        <line id="SvgjsLine1855" x1="0" y1="123.44760131835938" x2="187.0670566558838"
                          y2="123.44760131835938" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                        <line id="SvgjsLine1854" x1="0" y1="1" x2="0" y2="123.44760131835938" stroke="transparent"
                          stroke-dasharray="0" stroke-linecap="butt"></line>
                      </g>
                      <g id="SvgjsG1761" class="apexcharts-line-series apexcharts-plot-series">
                        <g id="SvgjsG1762" class="apexcharts-series" seriesName="Sales" data:longestSeries="true" rel="1"
                          data:realIndex="0">
                          <path id="SvgjsPath1782"
                            d="M 0 113.1603012084961L 23.383382081985474 115.21776123046875L 46.76676416397095 61.72380065917969L 70.15014624595642 57.60888061523437L 93.5335283279419 20.574600219726562L 116.91691040992737 51.436500549316406L 140.30029249191284 82.29840087890625L 163.68367457389832 76.12602081298829L 187.0670566558838 20.574600219726562"
                            fill="none" fill-opacity="1" stroke="rgba(255,255,255,0.8)" stroke-opacity="1"
                            stroke-linecap="round" stroke-width="5" stroke-dasharray="0" class="apexcharts-line" index="0"
                            clip-path="url(#gridRectMaskou8qswun)"
                            pathTo="M 0 113.1603012084961L 23.383382081985474 115.21776123046875L 46.76676416397095 61.72380065917969L 70.15014624595642 57.60888061523437L 93.5335283279419 20.574600219726562L 116.91691040992737 51.436500549316406L 140.30029249191284 82.29840087890625L 163.68367457389832 76.12602081298829L 187.0670566558838 20.574600219726562"
                            pathFrom="M -1 123.44760131835938L -1 123.44760131835938L 23.383382081985474 123.44760131835938L 46.76676416397095 123.44760131835938L 70.15014624595642 123.44760131835938L 93.5335283279419 123.44760131835938L 116.91691040992737 123.44760131835938L 140.30029249191284 123.44760131835938L 163.68367457389832 123.44760131835938L 187.0670566558838 123.44760131835938">
                          </path>
                          <g id="SvgjsG1763" class="apexcharts-series-markers-wrap" data:realIndex="0">
                            <g id="SvgjsG1765" class="apexcharts-series-markers"
                              clip-path="url(#gridRectMarkerMaskou8qswun)">
                              <circle id="SvgjsCircle1766" r="5" cx="0" cy="113.1603012084961"
                                class="apexcharts-marker no-pointer-events w2kd8y7mi" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="0" j="0" index="0"
                                default-marker-size="5"></circle>
                              <circle id="SvgjsCircle1767" r="5" cx="23.383382081985474" cy="115.21776123046875"
                                class="apexcharts-marker no-pointer-events whqd433oj" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="1" j="1" index="0"
                                default-marker-size="5"></circle>
                            </g>
                            <g id="SvgjsG1768" class="apexcharts-series-markers"
                              clip-path="url(#gridRectMarkerMaskou8qswun)">
                              <circle id="SvgjsCircle1769" r="5" cx="46.76676416397095" cy="61.72380065917969"
                                class="apexcharts-marker no-pointer-events wzbzynn7v" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="2" j="2" index="0"
                                default-marker-size="5"></circle>
                            </g>
                            <g id="SvgjsG1770" class="apexcharts-series-markers"
                              clip-path="url(#gridRectMarkerMaskou8qswun)">
                              <circle id="SvgjsCircle1771" r="5" cx="70.15014624595642" cy="57.60888061523437"
                                class="apexcharts-marker no-pointer-events wtb928ql3" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="3" j="3" index="0"
                                default-marker-size="5"></circle>
                            </g>
                            <g id="SvgjsG1772" class="apexcharts-series-markers"
                              clip-path="url(#gridRectMarkerMaskou8qswun)">
                              <circle id="SvgjsCircle1773" r="5" cx="93.5335283279419" cy="20.574600219726562"
                                class="apexcharts-marker no-pointer-events w3fm5pqxf" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="4" j="4" index="0"
                                default-marker-size="5"></circle>
                            </g>
                            <g id="SvgjsG1774" class="apexcharts-series-markers"
                              clip-path="url(#gridRectMarkerMaskou8qswun)">
                              <circle id="SvgjsCircle1775" r="5" cx="116.91691040992737" cy="51.436500549316406"
                                class="apexcharts-marker no-pointer-events w5x0emavh" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="5" j="5" index="0"
                                default-marker-size="5"></circle>
                            </g>
                            <g id="SvgjsG1776" class="apexcharts-series-markers"
                              clip-path="url(#gridRectMarkerMaskou8qswun)">
                              <circle id="SvgjsCircle1777" r="5" cx="140.30029249191284" cy="82.29840087890625"
                                class="apexcharts-marker no-pointer-events wa04kte5m" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="6" j="6" index="0"
                                default-marker-size="5"></circle>
                            </g>
                            <g id="SvgjsG1778" class="apexcharts-series-markers"
                              clip-path="url(#gridRectMarkerMaskou8qswun)">
                              <circle id="SvgjsCircle1779" r="5" cx="163.68367457389832" cy="76.12602081298829"
                                class="apexcharts-marker no-pointer-events wwjfzmhzx" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="7" j="7" index="0"
                                default-marker-size="5"></circle>
                            </g>
                            <g id="SvgjsG1780" class="apexcharts-series-markers"
                              clip-path="url(#gridRectMarkerMaskou8qswun)">
                              <circle id="SvgjsCircle1781" r="5" cx="187.0670566558838" cy="20.574600219726562"
                                class="apexcharts-marker no-pointer-events w889vwc4m" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="8" j="8" index="0"
                                default-marker-size="5"></circle>
                            </g>
                          </g>
                        </g>
                        <g id="SvgjsG1764" class="apexcharts-datalabels" data:realIndex="0"></g>
                      </g>
                      <line id="SvgjsLine1856" x1="0" y1="0" x2="187.0670566558838" y2="0" stroke="#b6b6b6"
                        stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line>
                      <line id="SvgjsLine1857" x1="0" y1="0" x2="187.0670566558838" y2="0" stroke-dasharray="0"
                        stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line>
                      <g id="SvgjsG1858" class="apexcharts-yaxis-annotations"></g>
                      <g id="SvgjsG1859" class="apexcharts-xaxis-annotations"></g>
                      <g id="SvgjsG1860" class="apexcharts-point-annotations"></g>
                      <rect id="SvgjsRect1861" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0"
                        stroke="none" stroke-dasharray="0" fill="#fefefe" class="apexcharts-zoom-rect"></rect>
                      <rect id="SvgjsRect1862" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0"
                        stroke="none" stroke-dasharray="0" fill="#fefefe" class="apexcharts-selection-rect"></rect>
                    </g>
                    <rect id="SvgjsRect1757" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0"
                      stroke="none" stroke-dasharray="0" fill="#fefefe"></rect>
                    <g id="SvgjsG1812" class="apexcharts-yaxis" rel="0" transform="translate(18.93294334411621, 0)">
                      <g id="SvgjsG1813" class="apexcharts-yaxis-texts-g"><text id="SvgjsText1815" font-family="inherit"
                          x="20" y="36.6" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300"
                          fill="#ffffff" class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1816">600</tspan>
                          <title>600</title>
                        </text><text id="SvgjsText1818" font-family="inherit" x="20" y="57.174600219726564"
                          text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1819">500</tspan>
                          <title>500</title>
                        </text><text id="SvgjsText1821" font-family="inherit" x="20" y="77.74920043945312"
                          text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1822">400</tspan>
                          <title>400</title>
                        </text><text id="SvgjsText1824" font-family="inherit" x="20" y="98.32380065917968"
                          text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1825">300</tspan>
                          <title>300</title>
                        </text><text id="SvgjsText1827" font-family="inherit" x="20" y="118.89840087890624"
                          text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1828">200</tspan>
                          <title>200</title>
                        </text><text id="SvgjsText1830" font-family="inherit" x="20" y="139.4730010986328"
                          text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1831">100</tspan>
                          <title>100</title>
                        </text><text id="SvgjsText1833" font-family="inherit" x="20" y="160.04760131835937"
                          text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1834">0</tspan>
                          <title>0</title>
                        </text></g>
                    </g>
                    <g id="SvgjsG1753" class="apexcharts-annotations"></g>
                  </svg>
                  <div class="apexcharts-legend" style="max-height: 110px;"></div>
                  <div class="apexcharts-tooltip apexcharts-theme-dark">
                    <div class="apexcharts-tooltip-title"
                      style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div>
                    <div class="apexcharts-tooltip-series-group" style="order: 1;"><span class="apexcharts-tooltip-marker"
                        style="background-color: rgb(255, 255, 255);"></span>
                      <div class="apexcharts-tooltip-text"
                        style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                        <div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span
                            class="apexcharts-tooltip-text-y-value"></span></div>
                        <div class="apexcharts-tooltip-goals-group"><span
                            class="apexcharts-tooltip-text-goals-label"></span><span
                            class="apexcharts-tooltip-text-goals-value"></span></div>
                        <div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span
                            class="apexcharts-tooltip-text-z-value"></span></div>
                      </div>
                    </div>
                  </div>
                  <div class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-dark">
                    <div class="apexcharts-xaxistooltip-text"
                      style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div>
                  </div>
                  <div
                    class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                    <div class="apexcharts-yaxistooltip-text"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h6
                class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
                Daily Sales</h6>
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">15% increase in
                today sales</p>
            </div>
            <div class="p-6 border-t border-blue-gray-50 px-6 py-5">
              <p class="antialiased font-sans text-sm leading-normal flex items-center font-normal text-blue-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-inherit">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z">
                  </path>
                </svg>&nbsp;updated 4 min ago
              </p>
            </div>
          </div>
          <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              class="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg -mt-6">
              <div style="min-height: 235px;">
                <div id="apexchartssdzplal8" class="apexcharts-canvas apexchartssdzplal8 apexcharts-theme-light"
                  style="width: 256px; height: 220px;"><svg id="SvgjsSvg1863" width="256" height="220"
                    xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg apexcharts-zoomable" xmlns:data="ApexChartsNS"
                    transform="translate(0, 0)" style="background: transparent;">
                    <g id="SvgjsG1865" class="apexcharts-inner apexcharts-graphical"
                      transform="translate(48.93294334411621, 35)">
                      <defs id="SvgjsDefs1864">
                        <clipPath id="gridRectMasksdzplal8">
                          <rect id="SvgjsRect1872" width="196.0670566558838" height="128.44760131835938" x="-4.5" y="-2.5"
                            rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff">
                          </rect>
                        </clipPath>
                        <clipPath id="forecastMasksdzplal8"></clipPath>
                        <clipPath id="nonForecastMasksdzplal8"></clipPath>
                        <clipPath id="gridRectMarkerMasksdzplal8">
                          <rect id="SvgjsRect1873" width="239.0670566558838" height="175.44760131835938" x="-26" y="-26"
                            rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff">
                          </rect>
                        </clipPath>
                      </defs>
                      <line id="SvgjsLine1871" x1="0" y1="0" x2="0" y2="123.44760131835938" stroke="#b6b6b6"
                        stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-xcrosshairs" x="0" y="0" width="1"
                        height="123.44760131835938" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1">
                      </line>
                      <g id="SvgjsG1896" class="apexcharts-xaxis" transform="translate(0, 0)">
                        <g id="SvgjsG1897" class="apexcharts-xaxis-texts-g" transform="translate(0, -10)"><text
                            id="SvgjsText1899" font-family="inherit" x="0" y="146.44760131835938" text-anchor="end"
                            dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                            class="apexcharts-text apexcharts-xaxis-label " style="font-family: inherit;"
                            transform="rotate(-45 1.14599609375 140.78094482421875)">
                            <tspan id="SvgjsTspan1900">Apr</tspan>
                            <title>Apr</title>
                          </text><text id="SvgjsText1902" font-family="inherit" x="23.383382081985474"
                            y="146.44760131835938" text-anchor="end" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;" transform="rotate(-45 24.623780250549316 140.78094482421875)">
                            <tspan id="SvgjsTspan1903">May</tspan>
                            <title>May</title>
                          </text><text id="SvgjsText1905" font-family="inherit" x="46.76676416397095"
                            y="146.44760131835938" text-anchor="end" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;" transform="rotate(-45 47.76676559448242 140.78094482421875)">
                            <tspan id="SvgjsTspan1906">Jun</tspan>
                            <title>Jun</title>
                          </text><text id="SvgjsText1908" font-family="inherit" x="70.15014624595642"
                            y="146.44760131835938" text-anchor="end" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;" transform="rotate(-45 71.150146484375 140.78094482421875)">
                            <tspan id="SvgjsTspan1909">Jul</tspan>
                            <title>Jul</title>
                          </text><text id="SvgjsText1911" font-family="inherit" x="93.5335283279419"
                            y="146.44760131835938" text-anchor="end" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;" transform="rotate(-45 94.53353118896484 140.78094482421875)">
                            <tspan id="SvgjsTspan1912">Aug</tspan>
                            <title>Aug</title>
                          </text><text id="SvgjsText1914" font-family="inherit" x="116.91691040992737"
                            y="146.44760131835938" text-anchor="end" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;" transform="rotate(-45 117.9788465499878 140.78094482421875)">
                            <tspan id="SvgjsTspan1915">Sep</tspan>
                            <title>Sep</title>
                          </text><text id="SvgjsText1917" font-family="inherit" x="140.30029249191284"
                            y="146.44760131835938" text-anchor="end" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;" transform="rotate(-45 141.30030345916748 140.78094482421875)">
                            <tspan id="SvgjsTspan1918">Oct</tspan>
                            <title>Oct</title>
                          </text><text id="SvgjsText1920" font-family="inherit" x="163.68367457389832"
                            y="146.44760131835938" text-anchor="end" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;" transform="rotate(-45 164.8859920501709 140.78094482421875)">
                            <tspan id="SvgjsTspan1921">Nov</tspan>
                            <title>Nov</title>
                          </text><text id="SvgjsText1923" font-family="inherit" x="187.0670566558838"
                            y="146.44760131835938" text-anchor="end" dominant-baseline="auto" font-size="13px"
                            font-weight="300" fill="#ffffff" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: inherit;" transform="rotate(-45 188.0670576095581 140.78094482421875)">
                            <tspan id="SvgjsTspan1924">Dec</tspan>
                            <title>Dec</title>
                          </text></g>
                      </g>
                      <g id="SvgjsG1948" class="apexcharts-grid">
                        <g id="SvgjsG1949" class="apexcharts-gridlines-horizontal">
                          <line id="SvgjsLine1960" x1="0" y1="0" x2="187.0670566558838" y2="0" stroke="#ffffff40"
                            stroke-dasharray="5" stroke-linecap="butt" class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1961" x1="0" y1="20.574600219726562" x2="187.0670566558838"
                            y2="20.574600219726562" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1962" x1="0" y1="41.149200439453125" x2="187.0670566558838"
                            y2="41.149200439453125" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1963" x1="0" y1="61.72380065917969" x2="187.0670566558838"
                            y2="61.72380065917969" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1964" x1="0" y1="82.29840087890625" x2="187.0670566558838"
                            y2="82.29840087890625" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1965" x1="0" y1="102.87300109863281" x2="187.0670566558838"
                            y2="102.87300109863281" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1966" x1="0" y1="123.44760131835938" x2="187.0670566558838"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                        </g>
                        <g id="SvgjsG1950" class="apexcharts-gridlines-vertical">
                          <line id="SvgjsLine1951" x1="0" y1="0" x2="0" y2="123.44760131835938" stroke="#ffffff40"
                            stroke-dasharray="5" stroke-linecap="butt" class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1952" x1="23.383382081985474" y1="0" x2="23.383382081985474"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1953" x1="46.76676416397095" y1="0" x2="46.76676416397095"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1954" x1="70.15014624595642" y1="0" x2="70.15014624595642"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1955" x1="93.5335283279419" y1="0" x2="93.5335283279419"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1956" x1="116.91691040992737" y1="0" x2="116.91691040992737"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1957" x1="140.30029249191284" y1="0" x2="140.30029249191284"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1958" x1="163.68367457389832" y1="0" x2="163.68367457389832"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1959" x1="187.0670566558838" y1="0" x2="187.0670566558838"
                            y2="123.44760131835938" stroke="#ffffff40" stroke-dasharray="5" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                        </g>
                        <line id="SvgjsLine1968" x1="0" y1="123.44760131835938" x2="187.0670566558838"
                          y2="123.44760131835938" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                        <line id="SvgjsLine1967" x1="0" y1="1" x2="0" y2="123.44760131835938" stroke="transparent"
                          stroke-dasharray="0" stroke-linecap="butt"></line>
                      </g>
                      <g id="SvgjsG1874" class="apexcharts-line-series apexcharts-plot-series">
                        <g id="SvgjsG1875" class="apexcharts-series" seriesName="Tasks" data:longestSeries="true" rel="1"
                          data:realIndex="0">
                          <path id="SvgjsPath1895"
                            d="M 0 113.1603012084961L 23.383382081985474 115.21776123046875L 46.76676416397095 61.72380065917969L 70.15014624595642 78.18348083496093L 93.5335283279419 20.574600219726562L 116.91691040992737 72.01110076904297L 140.30029249191284 41.149200439453125L 163.68367457389832 76.12602081298829L 187.0670566558838 20.574600219726562"
                            fill="none" fill-opacity="1" stroke="rgba(255,255,255,0.8)" stroke-opacity="1"
                            stroke-linecap="round" stroke-width="5" stroke-dasharray="0" class="apexcharts-line" index="0"
                            clip-path="url(#gridRectMasksdzplal8)"
                            pathTo="M 0 113.1603012084961L 23.383382081985474 115.21776123046875L 46.76676416397095 61.72380065917969L 70.15014624595642 78.18348083496093L 93.5335283279419 20.574600219726562L 116.91691040992737 72.01110076904297L 140.30029249191284 41.149200439453125L 163.68367457389832 76.12602081298829L 187.0670566558838 20.574600219726562"
                            pathFrom="M -1 123.44760131835938L -1 123.44760131835938L 23.383382081985474 123.44760131835938L 46.76676416397095 123.44760131835938L 70.15014624595642 123.44760131835938L 93.5335283279419 123.44760131835938L 116.91691040992737 123.44760131835938L 140.30029249191284 123.44760131835938L 163.68367457389832 123.44760131835938L 187.0670566558838 123.44760131835938">
                          </path>
                          <g id="SvgjsG1876" class="apexcharts-series-markers-wrap" data:realIndex="0">
                            <g id="SvgjsG1878" class="apexcharts-series-markers"
                              clip-path="url(#gridRectMarkerMasksdzplal8)">
                              <circle id="SvgjsCircle1879" r="5" cx="0" cy="113.1603012084961"
                                class="apexcharts-marker no-pointer-events wb8eley6a" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="0" j="0" index="0"
                                default-marker-size="5"></circle>
                              <circle id="SvgjsCircle1880" r="5" cx="23.383382081985474" cy="115.21776123046875"
                                class="apexcharts-marker no-pointer-events w1s52m1w4" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="1" j="1" index="0"
                                default-marker-size="5"></circle>
                            </g>
                            <g id="SvgjsG1881" class="apexcharts-series-markers"
                              clip-path="url(#gridRectMarkerMasksdzplal8)">
                              <circle id="SvgjsCircle1882" r="5" cx="46.76676416397095" cy="61.72380065917969"
                                class="apexcharts-marker no-pointer-events wgro4j9fo" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="2" j="2" index="0"
                                default-marker-size="5"></circle>
                            </g>
                            <g id="SvgjsG1883" class="apexcharts-series-markers"
                              clip-path="url(#gridRectMarkerMasksdzplal8)">
                              <circle id="SvgjsCircle1884" r="5" cx="70.15014624595642" cy="78.18348083496093"
                                class="apexcharts-marker no-pointer-events wrpolhlrn" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="3" j="3" index="0"
                                default-marker-size="5"></circle>
                            </g>
                            <g id="SvgjsG1885" class="apexcharts-series-markers"
                              clip-path="url(#gridRectMarkerMasksdzplal8)">
                              <circle id="SvgjsCircle1886" r="5" cx="93.5335283279419" cy="20.574600219726562"
                                class="apexcharts-marker no-pointer-events w1szejc1a" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="4" j="4" index="0"
                                default-marker-size="5"></circle>
                            </g>
                            <g id="SvgjsG1887" class="apexcharts-series-markers"
                              clip-path="url(#gridRectMarkerMasksdzplal8)">
                              <circle id="SvgjsCircle1888" r="5" cx="116.91691040992737" cy="72.01110076904297"
                                class="apexcharts-marker no-pointer-events wfyjbyx3h" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="5" j="5" index="0"
                                default-marker-size="5"></circle>
                            </g>
                            <g id="SvgjsG1889" class="apexcharts-series-markers"
                              clip-path="url(#gridRectMarkerMasksdzplal8)">
                              <circle id="SvgjsCircle1890" r="5" cx="140.30029249191284" cy="41.149200439453125"
                                class="apexcharts-marker no-pointer-events w89snhs0p" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="6" j="6" index="0"
                                default-marker-size="5"></circle>
                            </g>
                            <g id="SvgjsG1891" class="apexcharts-series-markers"
                              clip-path="url(#gridRectMarkerMasksdzplal8)">
                              <circle id="SvgjsCircle1892" r="5" cx="163.68367457389832" cy="76.12602081298829"
                                class="apexcharts-marker no-pointer-events w92hzubx1" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="7" j="7" index="0"
                                default-marker-size="5"></circle>
                            </g>
                            <g id="SvgjsG1893" class="apexcharts-series-markers"
                              clip-path="url(#gridRectMarkerMasksdzplal8)">
                              <circle id="SvgjsCircle1894" r="5" cx="187.0670566558838" cy="20.574600219726562"
                                class="apexcharts-marker no-pointer-events w6m9zjczs" stroke="#ffffff" fill="#ffffff"
                                fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="8" j="8" index="0"
                                default-marker-size="5"></circle>
                            </g>
                          </g>
                        </g>
                        <g id="SvgjsG1877" class="apexcharts-datalabels" data:realIndex="0"></g>
                      </g>
                      <line id="SvgjsLine1969" x1="0" y1="0" x2="187.0670566558838" y2="0" stroke="#b6b6b6"
                        stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line>
                      <line id="SvgjsLine1970" x1="0" y1="0" x2="187.0670566558838" y2="0" stroke-dasharray="0"
                        stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line>
                      <g id="SvgjsG1971" class="apexcharts-yaxis-annotations"></g>
                      <g id="SvgjsG1972" class="apexcharts-xaxis-annotations"></g>
                      <g id="SvgjsG1973" class="apexcharts-point-annotations"></g>
                      <rect id="SvgjsRect1974" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0"
                        stroke="none" stroke-dasharray="0" fill="#fefefe" class="apexcharts-zoom-rect"></rect>
                      <rect id="SvgjsRect1975" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0"
                        stroke="none" stroke-dasharray="0" fill="#fefefe" class="apexcharts-selection-rect"></rect>
                    </g>
                    <rect id="SvgjsRect1870" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0"
                      stroke="none" stroke-dasharray="0" fill="#fefefe"></rect>
                    <g id="SvgjsG1925" class="apexcharts-yaxis" rel="0" transform="translate(18.93294334411621, 0)">
                      <g id="SvgjsG1926" class="apexcharts-yaxis-texts-g"><text id="SvgjsText1928" font-family="inherit"
                          x="20" y="36.6" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300"
                          fill="#ffffff" class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1929">600</tspan>
                          <title>600</title>
                        </text><text id="SvgjsText1931" font-family="inherit" x="20" y="57.174600219726564"
                          text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1932">500</tspan>
                          <title>500</title>
                        </text><text id="SvgjsText1934" font-family="inherit" x="20" y="77.74920043945312"
                          text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1935">400</tspan>
                          <title>400</title>
                        </text><text id="SvgjsText1937" font-family="inherit" x="20" y="98.32380065917968"
                          text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1938">300</tspan>
                          <title>300</title>
                        </text><text id="SvgjsText1940" font-family="inherit" x="20" y="118.89840087890624"
                          text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1941">200</tspan>
                          <title>200</title>
                        </text><text id="SvgjsText1943" font-family="inherit" x="20" y="139.4730010986328"
                          text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1944">100</tspan>
                          <title>100</title>
                        </text><text id="SvgjsText1946" font-family="inherit" x="20" y="160.04760131835937"
                          text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="300" fill="#ffffff"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: inherit;">
                          <tspan id="SvgjsTspan1947">0</tspan>
                          <title>0</title>
                        </text></g>
                    </g>
                    <g id="SvgjsG1866" class="apexcharts-annotations"></g>
                  </svg>
                  <div class="apexcharts-legend" style="max-height: 110px;"></div>
                  <div class="apexcharts-tooltip apexcharts-theme-dark">
                    <div class="apexcharts-tooltip-title"
                      style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div>
                    <div class="apexcharts-tooltip-series-group" style="order: 1;"><span class="apexcharts-tooltip-marker"
                        style="background-color: rgb(255, 255, 255);"></span>
                      <div class="apexcharts-tooltip-text"
                        style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                        <div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span
                            class="apexcharts-tooltip-text-y-value"></span></div>
                        <div class="apexcharts-tooltip-goals-group"><span
                            class="apexcharts-tooltip-text-goals-label"></span><span
                            class="apexcharts-tooltip-text-goals-value"></span></div>
                        <div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span
                            class="apexcharts-tooltip-text-z-value"></span></div>
                      </div>
                    </div>
                  </div>
                  <div class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-dark">
                    <div class="apexcharts-xaxistooltip-text"
                      style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div>
                  </div>
                  <div
                    class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                    <div class="apexcharts-yaxistooltip-text"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h6
                class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
                Completed Tasks</h6>
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Last Campaign
                Performance</p>
            </div>
            <div class="p-6 border-t border-blue-gray-50 px-6 py-5">
              <p class="antialiased font-sans text-sm leading-normal flex items-center font-normal text-blue-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-inherit">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z">
                  </path>
                </svg>&nbsp;just updated
              </p>
            </div>
          </div>
        </div> -->
        <!-- <div class="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div
            class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
            <div
              class="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
              <div>
                <h6
                  class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
                  Projects</h6>
                <p
                  class="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg><strong>30 done</strong> this month
                </p>
              </div><button aria-expanded="false" aria-haspopup="menu" id=":r5:"
                class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                type="button"><span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="currenColor" viewBox="0 0 24 24" stroke-width="3"
                    stroke="currentColor" aria-hidden="true" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z">
                    </path>
                  </svg></span></button>
            </div>
            <div class="p-6 overflow-x-scroll px-0 pt-0 pb-2">
              <table class="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                        companies</p>
                    </th>
                    <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">members
                      </p>
                    </th>
                    <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">budget
                      </p>
                    </th>
                    <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                        completion</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="flex items-center gap-4"><img src="/material-tailwind-dashboard-react/img/logo-xd.svg"
                          alt="Material XD Version"
                          class="inline-block relative object-cover object-center w-9 h-9 rounded-md">
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                          Material XD Version</p>
                      </div>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50"><img
                        src="/material-tailwind-dashboard-react/img/team-1.jpeg" alt="Romina Hadid"
                        class="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"><img
                        src="/material-tailwind-dashboard-react/img/team-2.jpeg" alt="Ryan Tompson"
                        class="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5"><img
                        src="/material-tailwind-dashboard-react/img/team-3.jpeg" alt="Jessica Doe"
                        class="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5"><img
                        src="/material-tailwind-dashboard-react/img/team-4.jpeg" alt="Alexander Smith"
                        class="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5">
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$14,000</p>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="w-10/12">
                        <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">60%</p>
                        <div
                          class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                          <div
                            class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                            style="width: 60%;"></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="flex items-center gap-4"><img
                          src="/material-tailwind-dashboard-react/img/logo-atlassian.svg" alt="Add Progress Track"
                          class="inline-block relative object-cover object-center w-9 h-9 rounded-md">
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Add
                          Progress Track</p>
                      </div>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50"><img
                        src="/material-tailwind-dashboard-react/img/team-2.jpeg" alt="Ryan Tompson"
                        class="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"><img
                        src="/material-tailwind-dashboard-react/img/team-4.jpeg" alt="Alexander Smith"
                        class="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5">
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$3,000</p>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="w-10/12">
                        <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">10%</p>
                        <div
                          class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                          <div
                            class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                            style="width: 10%;"></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="flex items-center gap-4"><img
                          src="/material-tailwind-dashboard-react/img/logo-slack.svg" alt="Fix Platform Errors"
                          class="inline-block relative object-cover object-center w-9 h-9 rounded-md">
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Fix
                          Platform Errors</p>
                      </div>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50"><img
                        src="/material-tailwind-dashboard-react/img/team-3.jpeg" alt="Jessica Doe"
                        class="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"><img
                        src="/material-tailwind-dashboard-react/img/team-1.jpeg" alt="Romina Hadid"
                        class="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5">
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">Not set</p>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="w-10/12">
                        <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">100%</p>
                        <div
                          class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                          <div
                            class="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white"
                            style="width: 100%;"></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="flex items-center gap-4"><img
                          src="/material-tailwind-dashboard-react/img/logo-spotify.svg" alt="Launch our Mobile App"
                          class="inline-block relative object-cover object-center w-9 h-9 rounded-md">
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Launch
                          our Mobile App</p>
                      </div>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50"><img
                        src="/material-tailwind-dashboard-react/img/team-4.jpeg" alt="Alexander Smith"
                        class="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"><img
                        src="/material-tailwind-dashboard-react/img/team-3.jpeg" alt="Jessica Doe"
                        class="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5"><img
                        src="/material-tailwind-dashboard-react/img/team-2.jpeg" alt="Ryan Tompson"
                        class="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5"><img
                        src="/material-tailwind-dashboard-react/img/team-1.jpeg" alt="Romina Hadid"
                        class="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5">
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$20,500</p>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="w-10/12">
                        <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">100%</p>
                        <div
                          class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                          <div
                            class="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white"
                            style="width: 100%;"></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="flex items-center gap-4"><img src="/material-tailwind-dashboard-react/img/logo-jira.svg"
                          alt="Add the New Pricing Page"
                          class="inline-block relative object-cover object-center w-9 h-9 rounded-md">
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Add the
                          New Pricing Page</p>
                      </div>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50"><img
                        src="/material-tailwind-dashboard-react/img/team-4.jpeg" alt="Alexander Smith"
                        class="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white">
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$500</p>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="w-10/12">
                        <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">25%</p>
                        <div
                          class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                          <div
                            class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                            style="width: 25%;"></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-3 px-5 ">
                      <div class="flex items-center gap-4"><img
                          src="/material-tailwind-dashboard-react/img/logo-invision.svg" alt="Redesign New Online Shop"
                          class="inline-block relative object-cover object-center w-9 h-9 rounded-md">
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                          Redesign New Online Shop</p>
                      </div>
                    </td>
                    <td class="py-3 px-5 "><img src="/material-tailwind-dashboard-react/img/team-1.jpeg"
                        alt="Romina Hadid"
                        class="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"><img
                        src="/material-tailwind-dashboard-react/img/team-4.jpeg" alt="Alexander Smith"
                        class="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5">
                    </td>
                    <td class="py-3 px-5 ">
                      <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$2,000</p>
                    </td>
                    <td class="py-3 px-5 ">
                      <div class="w-10/12">
                        <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">40%</p>
                        <div
                          class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                          <div
                            class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                            style="width: 40%;"></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              class="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 p-6">
              <h6
                class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-2">
                Orders Overview</h6>
              <p
                class="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                  stroke="currentColor" aria-hidden="true" class="h-3.5 w-3.5 text-green-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"></path>
                </svg><strong>24%</strong> this month
              </p>
            </div>
            <div class="p-6 pt-0">
              <div class="flex items-start gap-4 py-3">
                <div
                  class="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-4/6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                    class="!w-5 !h-5 text-green-500">
                    <path fill-rule="evenodd"
                      d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p class="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">$2400,
                    Design changes</p><span class="block antialiased font-sans text-xs font-medium text-blue-gray-500">22
                    DEC 7:20 PM</span>
                </div>
              </div>
              <div class="flex items-start gap-4 py-3">
                <div
                  class="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-4/6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                    class="!w-5 !h-5 text-red-500">
                    <path fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p class="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">New order
                    #1832412</p><span class="block antialiased font-sans text-xs font-medium text-blue-gray-500">21 DEC 11
                    PM</span>
                </div>
              </div>
              <div class="flex items-start gap-4 py-3">
                <div
                  class="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-4/6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                    class="!w-5 !h-5 text-blue-500">
                    <path
                      d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z">
                    </path>
                  </svg>
                </div>
                <div>
                  <p class="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">Server
                    payments for April</p><span
                    class="block antialiased font-sans text-xs font-medium text-blue-gray-500">21 DEC 9:34 PM</span>
                </div>
              </div>
              <div class="flex items-start gap-4 py-3">
                <div
                  class="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-4/6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                    class="!w-5 !h-5 text-orange-500">
                    <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z"></path>
                    <path fill-rule="evenodd"
                      d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p class="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">New card
                    added for order #4395133</p><span
                    class="block antialiased font-sans text-xs font-medium text-blue-gray-500">20 DEC 2:20 AM</span>
                </div>
              </div>
              <div class="flex items-start gap-4 py-3">
                <div
                  class="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-4/6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                    class="!w-5 !h-5 text-pink-500">
                    <path
                      d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z">
                    </path>
                  </svg>
                </div>
                <div>
                  <p class="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">Unlock
                    packages for development</p><span
                    class="block antialiased font-sans text-xs font-medium text-blue-gray-500">18 DEC 4:54 AM</span>
                </div>
              </div>
              <div class="flex items-start gap-4 py-3">
                <div
                  class="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                    class="!w-5 !h-5 text-blue-gray-900">
                    <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                    <path fill-rule="evenodd"
                      d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                      clip-rule="evenodd"></path>
                    <path
                      d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z">
                    </path>
                  </svg>
                </div>
                <div>
                  <p class="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">New order
                    #9583120</p><span class="block antialiased font-sans text-xs font-medium text-blue-gray-500">17
                    DEC</span>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <div class="text-blue-gray-600">
        <footer class="py-2">
          <div class="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">© 2023, made with <svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                class="-mt-0.5 inline-block h-3.5 w-3.5">
                <path
                  d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
                </path>
              </svg> by <a href="https://www.creative-tim.com" target="_blank"
                class="transition-colors hover:text-blue-500">Creative Tim</a> for a better web.</p>
            <ul class="flex items-center gap-4">
              <li><a href="https://www.creative-tim.com" target="_blank"
                  class="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500">Creative
                  Tim</a></li>
              <li><a href="https://www.creative-tim.com/presentation" target="_blank"
                  class="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500">About
                  Us</a></li>
              <li><a href="https://www.creative-tim.com/blog" target="_blank"
                  class="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500">Blog</a>
              </li>
              <li><a href="https://www.creative-tim.com/license" target="_blank"
                  class="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500">License</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
