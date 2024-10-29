'use client';

import { useState } from 'react';
import { Button, Image, Text } from '@mantine/core';

import { ImageWrapper } from '../ImageWrapper';

import styles from './Footer.module.css';

import { FOOTER_BUTTON_TEXT, FOOTER_TEXT, TLanguage } from '../../constants';

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
        </div>
      )}
    </>
  );
};

export { Footer };
