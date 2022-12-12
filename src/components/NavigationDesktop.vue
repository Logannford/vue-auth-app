<template>
    <!-- This is the desktop nav -->
    <nav v-if="$store.state.user" class="bg-[#0C0C0C] flex flex-col h-screen sticky text-white w-[15%] items-center gap-y-5 duration-500" :class="{'w-[10%] duration-500': !navActive}">
        <!-- Logo -->
        <div class="flex mt-8 w-full justify-between">
            <div class="font-thin text-3xl ml-4 duration-300" :class="{'ml-6 duration-300': navActive}">
                Think
            </div>
            <button @click="navActive = !navActive" class="self-center bg-black rounded-full p-1 -mr-3 duration-500" :class="{'rotate-180 duration-500': !navActive}">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="5" y1="12" x2="11" y2="18" />
                    <line x1="5" y1="12" x2="11" y2="6" />
                </svg>
            </button>
        </div>

        <div class="mt-16 duration-300" :class="{'self-start ml-6 duration-300': navActive}">
            <div class="font-thin text-[10px] justify-center ml-0 -mb-1">
                Menu
            </div>
        </div>

        <div class="self-start flex flex-col gap-y-5 w-full">
            <!-- Home -->
            <button @click="counter=1" :class="{'bg-[#252525] rounded duration-300': counter==1}" class="mx-6">
                <RouterLink to="/" class="flex p-2" :class="{'justify-center': !navActive}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="6" height="5" rx="2" />
                        <rect x="4" y="13" width="6" height="7" rx="2" />
                        <rect x="14" y="4" width="6" height="7" rx="2" />
                        <rect x="14" y="15" width="6" height="5" rx="2" />
                    </svg>
                    <span class="text-xs font-thin text-center flex self-center ml-2 hover:text-gray-300" :class="{'hidden': !navActive}">
                        Dashboard
                    </span>
                </RouterLink>
            </button>
            <!-- Second page-->
            <button @click="counter=2" :class="{'bg-[#252525] rounded duration-300': counter==2}" class="mx-6">
                <RouterLink to="/explore" class="flex p-2" :class="{'justify-center': !navActive}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <span class="text-xs font-thin text-center flex self-center ml-2 hover:text-gray-300" :class="{'hidden': !navActive}">
                        Explore
                    </span>
                </RouterLink>
            </button>
            <!-- Upload -->
            <button @click="counter=3" :class="{'bg-[#252525] rounded duration-300': counter==3}" class="mx-6">
                <RouterLink to="/upload" class="flex text-white p-2" :class="{'justify-center': !navActive}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    <span class="text-xs font-thin text-center flex self-center ml-2 hover:text-gray-300" :class="{'hidden': !navActive}">
                        Upload
                    </span>
                </RouterLink>
            </button>
            <!-- Messages -->
            <button @click="counter=4" :class="{'bg-[#252525] rounded duration-300': counter==4}" class="mx-6">
                <RouterLink to="/messages" class="flex text-white p-2" :class="{'justify-center': !navActive}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                    <span class="text-xs font-thin text-center flex self-center ml-2 hover:text-gray-300" :class="{'hidden': !navActive}">
                        Messages
                    </span>
                </RouterLink>
            </button>
            <!-- Messages -->
            <button @click="counter=5" :class="{'bg-[#252525] rounded duration-300': counter==5}" class="mx-6">
                <RouterLink to="/friends" class="flex text-white p-2" :class="{'justify-center': !navActive}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="9" cy="7" r="4" />
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                    <span class="text-xs font-thin text-center flex self-center ml-2 hover:text-gray-300" :class="{'hidden': !navActive}">
                        Friends
                    </span>
                </RouterLink>
            </button>
        
        <hr class="border-t border-white w-3/5 opacity-30 mt-2 mx-auto" />
        <div class="flex justify-center duration-300" :class="{'self-start ml-6 duration-300': navActive}">
            <div class="font-thin text-[10px] justify-center ml-0 -mb-1">
                Account
            </div>
        </div>
            <!-- Settings -->

                <button class="mx-6" @click="counter=6" :class="{'bg-[#252525] rounded duration-300': counter==6}">
                    <RouterLink to="/settings" class="flex p-2" :class="{'justify-center': !navActive}">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span class="text-xs font-thin text-center flex self-center ml-2 hover:text-gray-300" :class="{'hidden': !navActive}">
                            Settings
                        </span>
                    </RouterLink>
                </button>

        </div>
        <!-- Profile -->
        <div class="bottom-0 absolute mb-6 self-start ml-6">
            <RouterLink to="/" class="flex self-center items-center" :class="{'flex-col justify-center': !navActive}">
                <div class="bg-black w-10 h-10 rounded-full text-white"></div>
                <span class="text-sm ml-2 font-thin text-center flex self-center" :class="{'hidden': !navActive}">
                    {{ this.$store.state.user.displayName }}
                </span>
            </RouterLink>
        </div>
    </nav>
    <!-- has to be outside the wrapper div other wise will display same size as nav -->
</template>

<script>
import { ref} from 'vue';

export default {
    data(){
        return{
        
        }
    },

    setup () {
        let counter = ref(1);
        let navActive = ref(true);

        return {
            counter,
            navActive
        }
    },
    components: {

    }
}
</script>


