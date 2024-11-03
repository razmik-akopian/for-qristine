'use client';

import { Image, Text } from '@mantine/core';
import { POST_CARD_TEXT, TLanguage } from '../../constants';
import { Footer } from '../Footer';
import { ImageWrapper } from '../ImageWrapper';

import styles from './PostCard.module.css';
import { Dispatch, SetStateAction } from 'react';
import { AudioPlayer } from '../AudioPlayer';

const PostCard = ({
  language,
  setLanguage,
}: {
  language: TLanguage;
  setLanguage: Dispatch<SetStateAction<'ARM' | 'RUS' | 'BY'>>;
}) => {
  return (
    <div className={styles.postCard}>
      <ImageWrapper>
        <Image src="/post-card.jpg" alt="С днем рождения!" />
      </ImageWrapper>
      <Text size="lg" className={styles.text}>
        {POST_CARD_TEXT.first[language]}
      </Text>
      <Text size="lg" className={styles.text}>
        {POST_CARD_TEXT.second[language]}
      </Text>
      <Text size="lg" className={styles.text}>
        {POST_CARD_TEXT.third[language]}
      </Text>
      <Text size="lg" className={styles.text}>
        {POST_CARD_TEXT.fourth[language]}
      </Text>
      <Text size="lg" className={styles.text}>
        {POST_CARD_TEXT.fifth[language]}
      </Text>
      <Text size="lg" className={styles.text}>
        {POST_CARD_TEXT.sixth[language]}
      </Text>

      <Footer language={language} setLanguage={setLanguage} />

      <AudioPlayer />
    </div>
  );
};

export { PostCard };
