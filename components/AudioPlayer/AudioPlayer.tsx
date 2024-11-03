import { useEffect } from 'react';

const AudioPlayer = () => {
  useEffect(() => {
    const audio = new Audio('/anastasia.mp3');
    audio.loop = true;

    const playAudio = () => {
      audio.play().catch((error) => {
        if (error.name === 'AbortError') {
          console.warn('Audio play was aborted:', error);
        } else {
          console.error('Failed to play audio:', error);
        }
      });
    };

    // Начинаем воспроизведение аудио только после взаимодействия пользователя
    window.addEventListener('click', playAudio, { once: true });

    return () => {
      audio.pause();
      audio.currentTime = 0;
      window.removeEventListener('click', playAudio);
    };
  }, []);

  return null;
};

export { AudioPlayer };
