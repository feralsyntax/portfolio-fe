import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-featured',
  imports: [],
  templateUrl: './landing-featured.html',
  styleUrl: './landing-featured.scss',
})
export class LandingFeatured {
  readonly featuredWorkImgUrl = `https://lh3.googleusercontent.com/aida-public/AB6AXuDmTx_UU0bLIqDDM_cy0jsQkZOTRTEK2aFUfkAz2oeGgSKOowILzSOGY3jT_CFh6uKgRcgjzF-evLQp-BTaswJ_I1uFOrgQmaZba7vzVm9e_KrlAyaj6mNoI3L8mlWD2yTUb0hohOeyvsK_3SS-seaIExnnSGuwUffIXyTn9066Jz79xZicWRCsH4cH7vNq-Py7Y2JYzxj25vNM5_wepMmEQy8E2kevxfx3eXzLaGwV3vjIj6mlgQHc`;
  readonly featuredWorkImgAlt = `A sleek, dark-themed user interface dashboard with semi-transparent glassmorphic panels, glowing purple accents, and abstract chat bubbles, designed for an AI application called 'Nia' against a dark grid background.`;

  readonly featuredWorkTitle = 'Nia';
  readonly featuredWorkLongDescription = `An AI companion that helps Kenyan youth discover themselves. Built with advanced LLM
        integration, real-time context processing, and a heavily optimized React frontend delivering
        a seamless conversational experience.`;
}
