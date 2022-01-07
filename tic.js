let tic1 = document.getElementById("tic1");
		let tic2 = document.getElementById("tic2");
		let tic3 = document.getElementById("tic3");
		let tic4 = document.getElementById("tic4");
		let tic5 = document.getElementById("tic5");
		let tic6 = document.getElementById("tic6");
		let tic7 = document.getElementById("tic7");
		let tic8 = document.getElementById("tic8");
		let tic9 = document.getElementById("tic9");
		let setwin= document.getElementById("win");
		let winexit =1;
		let ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9;
		let randomPlayer = Math.floor(Math.random() * 9) + 1;
		// alert(randomPlayer);
		function getplatyer(chr1, chr2, chr3, chr4, chr5, chr6, chr7, chr8, chr9, srandomPlayer) {
			let randomPlayer = Math.floor(Math.random() * 9) + 1;
			// alert(randomPlayer)
			// alert(srandomPlayer)
			if(srandomPlayer)
			{if (!chr1 && randomPlayer == 1) {
				if (check(ch1) && winexit) {
					let c = tic1.style.backgroundColor = 'green';
					ch1 = 2;
				}
			}
			else if (!chr2 && randomPlayer == 2) {
				if (check(ch2) && winexit) {
					let c = tic2.style.backgroundColor = 'green';
					ch2 = 2;
				}
			}
			else if (!chr3 && randomPlayer == 3) {
				if (check(ch3) && winexit) {
					let c = tic3.style.backgroundColor = 'green';
					ch3 = 2;
				}
			}
			else if (!chr4 && randomPlayer == 4) {
				if (check(ch4) && winexit) {
					let c = tic4.style.backgroundColor = 'green';
					ch4 = 2;
				}
			}
			else if (!chr5 && randomPlayer == 5) {
				if (check(ch5) && winexit) {
					let c = tic5.style.backgroundColor = 'green';
					ch5 = 2;
				}
			}
			else if (!chr6 && randomPlayer == 6) {
				if (check(ch6) && winexit) {
					let c = tic6.style.backgroundColor = 'green';
					ch6 = 2;
				}
			}
			else if (!chr7 && randomPlayer == 7) {
				if (check(ch7) && winexit) {
					let c = tic7.style.backgroundColor = 'green';
					ch7 = 2;
				}
			}
			else if (!chr8 && randomPlayer == 8) {
				if (check(ch8) && winexit) {
					let c = tic8.style.backgroundColor = 'green';
					ch8 = 2;
				}
			}
			else if (!ch9 && randomPlayer == 9) {
				if (check(ch9) && winexit) {
					let c = tic9.style.backgroundColor = 'green';
					ch9 = 2;
				}
			}
			else {
				getplatyer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, winexit);

			}}
		}
		function check(params) {
			if (params)
				return false;
			else
				return true;
		}
		function winer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, find) {
			if(ch1&& ch2&& ch3&& ch4&& ch5&& ch6&& ch7&& ch8&&ch9)
			{
				document.getElementById('win').innerHTML = "no one win ";winexit = 0;setwin.style.color='blue'
			}
			if (ch1 == 1 && ch2  == 1 && ch3  == 1 && find=== 'you')
				{document.getElementById('win').innerHTML = "you win ";winexit = 0}
			else if (ch1  == 1 && ch5  == 1 && ch9  == 1 && find=== 'you')
				{document.getElementById('win').innerHTML = "you win";winexit = 0}
			else if (ch1  == 1 && ch4  == 1 && ch7  == 1 && find=== 'you')
				{document.getElementById('win').innerHTML = "you win ";winexit = 0}
			else if (ch4 ==1&&  ch5  == 1 && ch6  == 1 && find=== 'you')
				{document.getElementById('win').innerHTML = "you win ";winexit = 0}
			else if (ch7  == 1 && ch8  == 1 && ch9   == 1&& find=== 'you')
				{document.getElementById('win').innerHTML = "you win ";winexit = 0}
			else if (ch3  == 1&& ch5  == 1 && ch7  == 1&& find=== 'you')
				{document.getElementById('win').innerHTML = "you win ";winexit = 0}
			else if (ch2  == 1&& ch5  == 1 && ch8 == 1&& find=== 'you')
				{document.getElementById('win').innerHTML = "you win ";winexit = 0}
				else if (ch3  == 1&& ch6  == 1 && ch9 == 1&& find=== 'you')
				{document.getElementById('win').innerHTML = "you win ";winexit = 0}


			if (ch1 == 2 && ch2  == 2 && ch3  == 2 && find=== 'you')
				{document.getElementById('win').innerHTML = "you lost ";winexit = 0;setwin.style.color='red'}
			else if (ch1  == 2 && ch5  == 2 && ch9  == 2 && find=== 'you')
				{document.getElementById('win').innerHTML = "you lost";winexit = 0;setwin.style.color='red'}
			else if (ch1  == 2 && ch4  == 2 && ch7  == 2 && find=== 'you')
				{document.getElementById('win').innerHTML = "you lost ";winexit = 0;setwin.style.color='red'}
			else if (ch4== 2 &&  ch5  == 2 && ch6  == 2 && find=== 'you')
				{document.getElementById('win').innerHTML = "you lost ";winexit = 0;setwin.style.color='red'}
			else if (ch7  == 2 && ch8  == 2 && ch9   == 2&& find=== 'you')
				{document.getElementById('win').innerHTML = "you lost ";winexit = 0;setwin.style.color='red'}
			else if (ch3  == 2&& ch5  == 2 && ch7  == 2&& find=== 'you')
				{document.getElementById('win').innerHTML = "you lost ";winexit = 0;setwin.style.color='red'}
			else if (ch2  == 2&& ch5  == 2 && ch8 == 2&& find=== 'you')
				{document.getElementById('win').innerHTML = "you lost ";winexit = 0;setwin.style.color='red'}
			else if (ch3  == 2&& ch6  == 2 && ch9 == 2&& find=== 'you')
				{document.getElementById('win').innerHTML = "you lost ";winexit = 0;setwin.style.color='red'}



		}
		function ctic1() {

			if (check(ch1) && winexit) {
				let c = tic1.style.backgroundColor = 'red';
				ch1 = 1;
				winer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, 'you');
				getplatyer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, winexit);


			}
		}
		function ctic2() {

			if (check(ch2)&& winexit) {
				let c = tic2.style.backgroundColor = 'red';
				ch2 = 1;
				winer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, 'you');
				getplatyer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, winexit);

			}

		}
		function ctic3() {

			if (check(ch3)&& winexit) {
				let c = tic3.style.backgroundColor = 'red';
				ch3 = 1;
				winer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, 'you');
				getplatyer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, winexit);

			}
		}
		function ctic4() {

			if (check(ch4)&& winexit) {
				let c = tic4.style.backgroundColor = 'red';
				ch4 = 1;
				winer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, 'you');
				getplatyer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, winexit);

			}
		}
		function ctic5() {

			if (check(ch5)&& winexit) {
				let c = tic5.style.backgroundColor = 'red';
				ch5 = 1;
				winer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, 'you');
				getplatyer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, winexit);

			}
		}
		function ctic6() {

			if (check(ch6)&& winexit) {
				let c = tic6.style.backgroundColor = 'red';
				ch6 = 1;
				winer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, 'you');
				getplatyer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, winexit);

			}
		}
		function ctic7() {

			if (check(ch7) && winexit) {
				let c = tic7.style.backgroundColor = 'red';
				ch7 = 1;
				winer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, 'you');
				getplatyer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, randomPlayer);

			}
		}
		function ctic8() {

			if (check(ch8)&& winexit) {
				let c = tic8.style.backgroundColor = 'red';
				ch8 = 1;
				winer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, 'you');
				getplatyer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, winexit);

			}
		}
		function ctic9() {

			if (check(ch9)&& winexit) {
				let c = tic9.style.backgroundColor = 'red';
				ch9 = 1;
				winer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, 'you');
				getplatyer(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, winexit);

			}
		}

		function forloop()
		{
			for(inti =0; i <= 10;i++)
			{

			}

		}
