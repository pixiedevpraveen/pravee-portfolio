<script lang="ts">
    import { PUBLIC_AUTHOR, PUBLIC_AUTHOR_ISA } from "$env/static/public";
    import { onMount } from "svelte";
    import type { Work } from "../types/home";

    let { data }: { data: Work[] } = $props();

    let show = $state(false);

    onMount(() => {
        const el = document.querySelector(".circle-anim");
        if (!el) return;

        const obs = new IntersectionObserver(
            (entries) => {
                const ratio = entries[0].intersectionRatio;
                // console.log(ratio);
                show = ratio === 1;
            },
            { threshold: [1, 0.7] },
        );

        obs.observe(el);
        return () => {
            obs.unobserve(el);
        };
    });

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
    {#each data as item, idx (item["title"] + idx)}
        <button
            class="circle-float text-sm sm:text-base flex flex-col items-center absolute p-2 rounded-full bg-blur"
            class:anim-none="{!show}"
            style="{`--degree: ${getTransformDegree(idx)}deg;`}"
            >{item.title}
            <p
                class="details absolute p-2 top-[120%] rounded-lg max-w-full bg-blur"
            >
                {@html item.details}
            </p>
        </button>
    {/each}

    <div
        class="anim-vawe relative cursor-pointer rounded-full w-2/5 sm:w-1/2 aspect-square 1border-2 border-[#d3d3d3] 1bg-[linear-gradient(120deg,white,#ececec)] bg-blur p-2 z-10"
    >
        <img class="" src="/android-chrome-512x512.png" alt="" />
    </div>

    <div
        class="about-me text-sm sm:text-base rounded-lg flex flex-col w-max items-center scale-90 transition-opacity"
    >
        <span class="font-semibold">{PUBLIC_AUTHOR}</span>
        <span>{PUBLIC_AUTHOR_ISA}</span>
    </div>
</section>

<style>
    .circle-float:focus-within ~ .about-me {
        opacity: 0;
    }

    .circle-anim .circle-float {
        transition: transform 5s;
        transform: scale(0.8);
        animation: circle-anim 10s forwards ease infinite;
        animation-delay: 1s;
    }
    .circle-anim:focus-within .circle-float,
    .circle-anim:hover .circle-float,
    .circle-anim .circle-float.anim-none {
        animation-play-state: paused;
    }
    .circle-float:focus-within {
        transform: translateY(220%) !important;
        z-index: 1;
    }
    .circle-float:not(:focus) .details {
        display: none;
    }

    @keyframes circle-anim {
        0% {
            transform: rotate(var(--degree)) translateX(0)
                rotate(calc(var(--degree) * -1)) scale(0.8);
        }

        20% {
            transform: rotate(calc(var(--degree) + 360deg))
                translateX(min(12rem, 35vw))
                rotate(calc(var(--degree) * -1 - 360deg)) scale(0.8);
        }
        80% {
            transform: rotate(calc(var(--degree) + 360deg))
                translateX(min(12rem, 35vw))
                rotate(calc(var(--degree) * -1 - 360deg)) scale(0.8);
        }
        90% {
            transform: rotate(var(--degree)) translateX(min(12rem, 35vw))
                rotate(calc(var(--degree) * -1)) scale(0.8);
        }
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
