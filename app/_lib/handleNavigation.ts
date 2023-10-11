import { NAV_LINKS } from "@components/layout/navbar/navLinks";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";

type Push = (href: string, options?: NavigateOptions | undefined) => void;

export function handleNavigation(direction: "UP" | "DOWN", push: Push) {
  const pathname = window.location.pathname;
  const currentIndex = NAV_LINKS.findIndex((obj) => obj.pathname === pathname);

  if (direction === "UP") {
    // return if we already in the first link
    if (pathname === "/") return;
    // Get the Prev Link
    const prevLink = NAV_LINKS[currentIndex - 1];
    // Redirect user to the previous link
    if (push) {
      push(prevLink.pathname);
    } else {
      window.location.assign(prevLink.pathname);
    }
  }

  if (direction === "DOWN") {
    // return if we already in the last link
    if (pathname === NAV_LINKS[NAV_LINKS.length - 1].pathname) return;
    // Get the next link
    const nextLink = NAV_LINKS[currentIndex + 1];
    // Redirect user to the next link
    if (push) {
      push(nextLink.pathname);
    } else {
      window.location.assign(nextLink.pathname);
    }
  }
}

export function handleNavigateWithKeys(
  e: KeyboardEvent,
  push: (href: string, options?: NavigateOptions | undefined) => void
) {
  // If the user pressed up arrow go to prev page
  if (e.code === "ArrowUp") {
    handleNavigation("UP", push);
  }
  // If the user pressed down arrow or the space bar go to next page
  if (e.code === "ArrowDown" || e.code === "Space") {
    handleNavigation("DOWN", push);
  }
}

function isAtTheBottom() {
  // Calculate the distance between the bottom of the page and the current scroll position
  var distanceToBottom =
    document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

  if (distanceToBottom <= 0) return true;
  return false;
}

export function handleNavigateWithScroll(e: WheelEvent, push: Push) {
  // Check the direction of scrolling
  if (e.deltaY > 0) {
    // Check if the user at the bottom of the page
    if (isAtTheBottom()) {
      handleNavigation("DOWN", push);
    }
  } else if (e.deltaY < 0) {
    // Check if the user at the top of the page
    if (window.scrollY <= 0) {
      handleNavigation("UP", push);
    }
  }
}

type TouchStatus = {
  isPulling: boolean;
  startPoint: number;
  currentPoint: number;
};
type SetTouchStatus = React.Dispatch<React.SetStateAction<TouchStatus>>;

export function handleTouchStart(
  e: TouchEvent,
  setTouchStatus: SetTouchStatus
) {
  setTouchStatus((prev) => {
    return {
      ...prev,
      startPoint: e.touches[0].clientY,
      isPulling: false,
    };
  });
}

export function handleTouchMove(e: TouchEvent, setTouchStatus: SetTouchStatus) {
  setTouchStatus((prev) => {
    return {
      ...prev,
      currentPoint: e.touches[0].clientY,
      isPulling: true,
    };
  });
}

export function handleTouchEnd(
  touchStatus: TouchStatus,
  setTouchStatus: SetTouchStatus,
  push: Push
) {
  if (!touchStatus.isPulling) return;
  setTouchStatus((prev) => {
    return {
      ...prev,
      isPulling: false,
    };
  });

  // Go to prev page
  if (touchStatus.startPoint < touchStatus.currentPoint) {
    // Check if the user at the top of the page
    if (window.scrollY <= 0) {
      handleNavigation("UP", push);
    }
  }

  // Go to next page
  if (touchStatus.startPoint > touchStatus.currentPoint) {
    if (isAtTheBottom()) {
      handleNavigation("DOWN", push);
    }
  }
}
