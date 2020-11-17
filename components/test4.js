import { useState } from 'react'

export default function Test4() {
  const [likes, setLikes] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    setLikes(likes + 1);
  };

  return (
    <form
      method="post"
      class="LikeForm"
    >
      <button
        aria-label="Like this image"
        class="LikeForm__button"
        onClick={handleClick}
      >
        ❤️
      </button>
      { likes }
    </form>
  );
}
