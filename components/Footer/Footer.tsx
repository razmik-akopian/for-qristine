'use client';

import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { Button, Image, Text } from '@mantine/core';

import { ImageWrapper } from '../ImageWrapper';
import styles from './Footer.module.css';

import {
  COPYRIGHT,
  EXTRA_BUTTON_TEXT,
  FOOTER_BUTTON_TEXT,
  FOOTER_TEXT,
  TLanguage,
} from '../../constants';

const Footer = ({
  language,
  setLanguage,
}: {
  language: TLanguage;
  setLanguage: Dispatch<SetStateAction<'ARM' | 'RUS' | 'BY'>>;
}) => {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showContent && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showContent]);

  return (
    <>
      <Button
        onClick={() => setShowContent((prev) => !prev)}
        color="pink"
        size="xl"
        className={styles.button}
      >
        {FOOTER_BUTTON_TEXT[language]}
      </Button>
      {showContent && (
        <div ref={contentRef}>
          <ImageWrapper>
            <Image src="/God.gif" alt="С днем рождения!" className={styles.footer} />
          </ImageWrapper>
          <Text size="lg" className={styles.text}>
            {FOOTER_TEXT.first[language]}
          </Text>

          <ImageWrapper>
            <Image src="/hugs.gif" alt="Крепко крепко тебя обнимаю" className={styles.footer} />
          </ImageWrapper>

          <Text size="lg" className={styles.text}>
            {FOOTER_TEXT.second[language]}
          </Text>

          <ImageWrapper>
            <Image src="/winnie.png" alt="Всегда твой, Размик" className={styles.footer} />
          </ImageWrapper>

          <Text size="lg" className={styles.text}>
            {FOOTER_TEXT.third[language]}
          </Text>

          <Text size="lg" className={`${styles.text} ${styles.date}`}>
            30.10.2024
          </Text>

          <div>
            <div>{COPYRIGHT.first[language]}</div>
            <div>{COPYRIGHT.second[language]}</div>
          </div>

          {language !== 'BY' && (
            <Button
              onClick={() => {
                setLanguage('BY');
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }, 100);
              }}
              color="pink"
              size="sm"
              className={styles.button}
            >
              {EXTRA_BUTTON_TEXT[language]}
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export { Footer };
