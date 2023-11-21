
	window.addEventListener('DOMContentLoaded', function () {
		const windowWidth = window.innerWidth;
		const horizontalSection = document.querySelector('.horizontal-section');
		const elementWrapper =
			horizontalSection.querySelector('.element-wrapper');
		const elementDiv = elementWrapper.querySelectorAll('.element');

		const horizontalLength = elementWrapper.scrollWidth;

		const distFromTop = horizontalSection.offsetTop;

		const distFromBottom = horizontalSection.offsetHeight + distFromTop;

		const scrollDistance =
			distFromTop + horizontalLength + windowWidth * 1.5;

		const sectionTitle = horizontalSection.querySelector('.section-title');

		const elementWrapOffsetLeft = elementDiv[0].offsetWidth * 3;
		const elementVideoAll = elementWrapper.querySelectorAll('video');

	
		horizontalSection.style.height =
			horizontalLength -
			elementWrapOffsetLeft +
			windowWidth * 1.5 +
			window.innerHeight +
			'px';

		document.querySelector('.sticky-wrapper').parentNode.style.height =
			horizontalLength + windowWidth * 1.5 + window.innerHeight + 'px';

		elementWrapper.style.width = horizontalLength + windowWidth + 'px';
		elementWrapper.style.marginLeft = elementWrapOffsetLeft + 'px';

		function randomNum() {
			let arr = [];
			let i = 0;
			while (i < 5) {
				let n = Math.floor(Math.random() * 5) + 1;
				if (notSame(n)) {
					arr.push(n);
					i++;
				}
			}
			function notSame(n) {
				return arr.every((e) => n !== e);
			}
			return arr;
		}

		const numArr = randomNum();

		for (let i = 0; i < numArr.length; i++) {
			const _video = elementDiv[i].querySelector('video');
			
			_video.setAttribute(
				'src',
				'/wp-content/uploads/2022/09/main_5_' +
					numArr[i] +
					'-influencer_1.mp4'
			);
		}
		function throttleUsingRaf(cb) {
			let rAfTimeout = null;

			return function () {
				if (rAfTimeout) {
					window.cancelAnimationFrame(rAfTimeout);
				}
				rAfTimeout = window.requestAnimationFrame(function () {
					cb();
				});
			};
		}

		function onScroll() {
			var scrollTop = window.pageYOffset;

			if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
				sectionTitle.classList.remove('off');
				sectionTitle.classList.add('on');

				if (windowWidth - (scrollTop - distFromTop) > 0) {
					document.querySelector('.sticky-wrapper').style.marginLeft =
						Math.max(
							windowWidth - (scrollTop - distFromTop),
							windowWidth * 0.04
						) + 'px';

					document.querySelector('.element-wrapper').style.transform =
						'translateX(0px)';
				} else if (windowWidth - (scrollTop - distFromTop) <= 0) {
					document.querySelector('.sticky-wrapper').style.marginLeft =
						windowWidth * 0.04 + '0px';

					document.querySelector('.element-wrapper').style.transform =
						'translateX(-' +
						Math.min(
							scrollTop - distFromTop - windowWidth,
							horizontalLength - elementWrapOffsetLeft * 0.8
						) +
						'px)';
				}
			} else if (scrollTop < distFromTop) {
				sectionTitle.classList.remove('on');
				sectionTitle.classList.add('off');
				document.querySelector('.sticky-wrapper').style.marginLeft =
					'100vw';
			} else if (scrollTop > distFromBottom) {
				sectionTitle.classList.remove('on');
				sectionTitle.classList.add('off');
			}
		}

		document.addEventListener('scroll', throttleUsingRaf(onScroll));
	});
