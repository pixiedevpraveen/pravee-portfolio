<script lang="ts">
    import type { Work } from "../types/home";

    let show = $state(true);
    let deg = $state(0);

    let { data }: { data: Work[] } = $props();

    const getTransformDegree = (index: number) => {
        let part = Math.round(360 / (data ? data.length + 1 : 0));
        let degree = part * index;
        // this will start from the top
        degree += part * -2;
        return degree;
    };
</script>

<section
    class="circle-anim relative flex flex-col items-center justify-center rounded-full w-96 aspect-square max-w-[90vw] border-21 border-[#d3d3d350] mx-auto mt-6"
>
    <button
        onclick="{() => (show = !show)}"
        class="anim-vawe p-0 relative cursor-pointer rounded-full w-2/5 sm:w-1/2 aspect-square 1border-2 border-[#d3d3d3] 1bg-[linear-gradient(120deg,white,#ececec)] bg-blur"
    >
        <img class="" src="/android-chrome-512x512.png" alt="" />
    </button>

    {#each data as item, idx (item["title"] + idx)}
        <button
            onclick="{() => (deg += 60)}"
            class="circle-float text-sm sm:text-base flex flex-col items-center absolute p-2 rounded-full transition-all duration-700 bg-blur"
            class:!transform-none="{!show}"
            style="{`--degree: ${getTransformDegree(idx) + deg}deg;`}"
            >{item.title}
            <p
                class="details absolute p-2 top-[120%] rounded-lg max-w-full bg-blur"
            >
                {@html item.details}
            </p>
        </button>
    {/each}

    <div
        class="about-me text-sm sm:text-base rounded-lg flex flex-col w-max items-center scale-90 transition-opacity"
    >
        <span class="font-semibold">Praveen yadav</span>
        <span>Software Developer</span>
    </div>
</section>

<style>
    .circle-float:focus-within ~ .about-me {
        opacity: 0;
    }

    .circle-anim .circle-float {
        transform: rotate(var(--degree)) translateX(min(12rem, 35vw))
            rotate(calc(var(--degree) * -1)) scale(0.8);
        transition: all 0.5s;
    }
    .circle-anim .circle-float {
        animation: circle-anim 15s forwards ease infinite;
    }
    .circle-anim:hover .circle-float {
        animation-play-state: paused;
    }
    @keyframes circle-anim {
        0% {
            transform: rotate(var(--degree)) translateX(min(12rem, 35vw))
                rotate(calc(var(--degree) * -1)) scale(0.8);
        }
        100% {
            transform: rotate(calc(var(--degree) + 360deg))
                translateX(min(12rem, 35vw))
                rotate(calc(var(--degree) * -1 - 360deg)) scale(0.8);
        }
    }
    .circle-anim:focus-within .circle-float:not(:focus-within),
    .circle-anim:focus-within .circle-float:not(:focus-within) {
        z-index: -1;
        transform: rotate(0deg) translateX(0) rotate(0deg) scale(1);
        /* opacity: 0; */
    }
    .circle-float:focus-within {
        transform: translateY(220%) !important;
        z-index: 1;
    }
    .circle-float:not(:focus) .details {
        display: none;
    }
    .anim-vawe/* ,
    .anim-vawe-hover:hover */ {
        border-radius: 38% 62% 55% 45% / 32% 53% 47% 68%;
        -webkit-animation: vawe 7s linear infinite;
        animation: vawe 7s linear infinite;
        transition: all 2s;
    }
    .anim-vawe:hover {
        animation-play-state: paused;
    }

    @-webkit-keyframes vawe {
        20% {
            border-radius: 45% 55% 62% 38%/53% 51% 49% 47%;
        }

        40% {
            border-radius: 45% 55% 49% 51%/36% 51% 49% 64%;
        }

        60% {
            border-radius: 60% 40% 57% 43%/47% 62% 38% 53%;
        }

        80% {
            border-radius: 60% 40% 32% 68%/38% 36% 64% 62%;
        }
    }

    @keyframes vawe {
        20% {
            border-radius: 45% 55% 62% 38%/53% 51% 49% 47%;
        }

        40% {
            border-radius: 45% 55% 49% 51%/36% 51% 49% 64%;
        }

        60% {
            border-radius: 60% 40% 57% 43%/47% 62% 38% 53%;
        }

        80% {
            border-radius: 60% 40% 32% 68%/38% 36% 64% 62%;
        }
    }
</style>
