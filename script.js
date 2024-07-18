function addEventHandlers() {
	const navToggleEl = document.querySelector('#nav-toggle');
	const scrollIconEl = document.querySelector('#scroll-to-top');
	const menuEls = document.querySelectorAll('.links__item.menu');
	const adjacentMenuEl = document.querySelector(
		'.links__item.menu + .links__item:not(.menu)'
	);

	// mobile menu toggle
	function handleToggleClick(e) {
		e.preventDefault();

		if (navToggleEl.ariaExpanded === 'true') {
			navToggleEl.ariaExpanded = 'false';
		} else {
			navToggleEl.ariaExpanded = 'true';
		}
	}

	// keyboard focus
	function handleMenuFocus(e) {
		e.preventDefault();
		const target = e.target.closest('a');

		if (!target) return;

		if (e.key === 'Enter') {
			if (target.ariaExpanded === 'true') {
				target.ariaExpanded = 'false';
			} else {
				target.ariaExpanded = 'true';
			}
		}
	}

	// close dropdown on keyboard focus of adjacent nav link
	function handleMenuBlur(e) {
		e.preventDefault();
		const target = document.querySelector('a[aria-expanded="true"]');

		if (target) {
			target.ariaExpanded = 'false';
		}
	}

	// handle scroll to top
	function handleScrollToTop(e) {
		const skipLinkEl = document.querySelector('#skip-link');

		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});

		skipLinkEl.focus({ preventScroll: true });
	}

	scrollIconEl.addEventListener('click', handleScrollToTop);
	navToggleEl.addEventListener('click', handleToggleClick);
	menuEls.forEach((el) => {
		el.addEventListener('keyup', handleMenuFocus);
	});
	adjacentMenuEl.addEventListener('keyup', handleMenuBlur);
}

addEventHandlers();
