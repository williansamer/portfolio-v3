export default function isBlackHeader(setBlackHeader) {
  const isBlackHeader_ = () => {
    if (window.scrollY > 10) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }

    window.addEventListener("scroll", isBlackHeader_);
  };
}
