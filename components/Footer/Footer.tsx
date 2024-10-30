'use client';

import { useState } from 'react';
import { Button, Image, Text } from '@mantine/core';

import { ImageWrapper } from '../ImageWrapper';

import styles from './Footer.module.css';

import {
  FOOTER_BUTTON_TEXT,
  FOOTER_LAST_TEXT,
  FOOTER_SECOND_TEXT,
  FOOTER_TEXT,
  TLanguage,
} from '../../constants';

const Footer = ({ language }: { language: TLanguage }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowImage((prev) => !prev)}
        color="pink"
        size="xl"
        className={styles.button}
      >
        {FOOTER_BUTTON_TEXT[language]}
      </Button>
      {showImage && (
        <div>
          <ImageWrapper>
            <Image src="/God.gif" alt="С днем рождения!" className={styles.footer} />
          </ImageWrapper>
          <Text size="lg" className={styles.text}>
            {FOOTER_TEXT[language]}
          </Text>

          <ImageWrapper>
            <Image src="/hugs.gif" alt="Крепко крепко тебя обнимаю" className={styles.footer} />
          </ImageWrapper>

          <Text size="lg" className={styles.text}>
            {FOOTER_SECOND_TEXT[language]}
          </Text>

          <ImageWrapper>
            <Image src="/winnie.png" alt="Всегда твой, Размик" className={styles.footer} />
          </ImageWrapper>

          <Text size="lg" className={styles.text}>
            {FOOTER_LAST_TEXT[language]}
          </Text>
        </div>
      )}
    </>
  );
};

export { Footer };
