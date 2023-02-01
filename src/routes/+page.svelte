<script>
	import { onMount } from 'svelte';
	import src from '../lib/images/6andoleros.png'



  let countDownDate = new Date("Mar 10, 2023").getTime();
  let intervalId;
	let days, hours, minutes, seconds;
  const startCountdown = () => {
    intervalId = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
  
      days = Math.floor(distance / (1000 * 60 * 60 * 24));
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      if (distance < 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  };

  onMount(startCountdown);
</script>

<svelte:head>
	<title>6andolero$</title>
	<meta name="description" content="6andolero$" />
</svelte:head>

<div class="wrapper h-screen">
	<header class="flex items-center justify-center border-b-2 border-black p-7">
		<img src={src} alt="" class="w-25">
	</header>
	
	<div class="h-3/4 flex items-center justify-center font-space-mono font-bold flex-col text-center ">
		<p class="uppercase text-5xl mb-5">6andoleroS 2023.</p>
		<span class="text-2xl mb-10">em manutenção...</span>
		<p class="text-5xl px-3 mb-10">{days ? days : '00'}d {hours ? hours : '00'}h {minutes ? minutes : '00'}m {seconds ? seconds : '00'}s</p>
		<a class="border-black text-black border-2 p-3 pointer ease-out duration-200 hover:scale-110 hover:text-white hover:bg-black hover:ease-in" href="https://www.instagram.com/6andoleros/">Ir para o Instagram
		<button >
			<i class="fa fa-instagram"></i>
		</button>
	</a>
	</div>
	<footer class="flex justify-center">
		<p class="font-bold text-center font-space-mono">
			6ANDOLERO$ <br> COPYRIGHT© ALL RIGHTS RESERVERD</p>
	</footer>
</div>