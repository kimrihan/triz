
	window.addEventListener('DOMContentLoaded', function () {
		const pic = document.querySelectorAll('picture');
		const imgZero = pic[0].querySelector('img');
		const imgOne = pic[1].querySelector('img');
		const imgTwo = pic[2].querySelector('img');
		const imgThree = pic[3].querySelector('.last-bg');

		const leftText = document.querySelector('.text');
		const bottomText = document.querySelector('.text2');

		const leftParagraphArray = leftText.querySelectorAll('p');
		const bottomParagraphArray = bottomText.querySelectorAll('p');
		const logo = document.querySelector('picture .title');

		const leftTextLocationInit = -70;
		const bottomTextLocationInit = 175;

		const leftTextLocationValue = 50;
		const bottomTextLocationValue = 50;

		const borderTopRadiusValue = 45;

		const processValue = 60 / this.window.innerHeight;

		imgOne.style.top = (35 - window.scrollY * processValue) * -1 + 'vh';
		imgOne.style.left = (45 - window.scrollY * processValue) * -1 + 'vw';

		function imageZoomScrollEvent(
			picSelector,
			imgSelector,
			topValue,
			bottomValue,
			leftValue,
			rightValue
		) {
			picSelector.style.top =
				topValue - window.scrollY * processValue + 'vh';
			picSelector.style.bottom =
				bottomValue - window.scrollY * processValue + 'vh';
			picSelector.style.left =
				leftValue - window.scrollY * processValue + 'vw';
			picSelector.style.right =
				rightValue - window.scrollY * processValue + 'vw';

			picSelector.style.borderTopLeftRadius = borderTopRadiusValue + '%';
			picSelector.style.borderTopRightRadius = borderTopRadiusValue + '%';

			imgSelector.style.top =
				(topValue - window.scrollY * processValue) * -1 + 'vh';
			imgSelector.style.left =
				(leftValue - window.scrollY * processValue) * -1 + 'vw';
		}
		function imageZoomCompletion(picSelector, imgSelector) {
			picSelector.style.top = 0 + 'vh';
			picSelector.style.bottom = 0 + 'vh';
			picSelector.style.left = 0 + 'vw';
			picSelector.style.right = 0 + 'vw';
			picSelector.style.borderRadius = '0';

			imgSelector.style.top = 0 + 'vh';
			imgSelector.style.left = 0 + 'vw';
		}

		window.addEventListener('scroll', function () {
			if (window.scrollY > 0) {
				logo.classList.add('hide-title');
			} else {
				logo.classList.remove('hide-title');
			}

			if (65 - window.scrollY * processValue >= 0) {
				imageZoomScrollEvent(pic[1], imgOne, 56, 61, 65, 65);
			} else {
				imageZoomCompletion(pic[1], imgOne);
			}

			if (125 - window.scrollY * processValue >= 0) {
				imageZoomScrollEvent(pic[2], imgTwo, 108, 108, 115, 115);
			} else {
				imageZoomCompletion(pic[2], imgTwo);
			}

			if (185 - window.scrollY * processValue >= 0) {
				imageZoomScrollEvent(pic[3], imgThree, 168, 168, 175, 175);
			} else {
				imageZoomCompletion(pic[3], imgThree);
			}

			if (window.scrollY > window.innerHeight * 3) {
				leftText.style.left =
					Math.min(
						(window.scrollY - window.innerHeight * 3) * 0.2 - 70,
						50
					) + '%';
				bottomText.style.top =
					Math.max(
						170 - (window.scrollY - window.innerHeight * 3) * 0.2,
						50
					) + '%';
				if (
					leftText.style.left === leftTextLocationValue + '%' &&
					bottomText.style.top === bottomTextLocationValue + '%'
				) {
					for (let i = 0; i < leftParagraphArray.length; i++) {
						leftParagraphArray[i].classList.add('fade');
					}
					for (let i = 0; i < bottomParagraphArray.length; i++) {
						bottomParagraphArray[i].classList.add('fade');
					}
				} else {
					for (let i = 0; i < leftParagraphArray.length; i++) {
						leftParagraphArray[i].classList.remove('fade');
					}
					for (let i = 0; i < bottomParagraphArray.length; i++) {
						bottomParagraphArray[i].classList.remove('fade');
					}
				}
			} else {
				leftText.style.left = leftTextLocationInit + '%';
				bottomText.style.top = bottomTextLocationInit + '%';
			}
		});
	});

