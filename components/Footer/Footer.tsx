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
  VIEW_COUNT_TEXT,
} from '../../constants';

const Footer = ({
  language,
  setLanguage,
}: {
  language: TLanguage;
  setLanguage: Dispatch<SetStateAction<'ARM' | 'RUS' | 'BY'>>;
}) => {
  const [showContent, setShowContent] = useState(false);
  const [viewCount, setViewCount] = useState<number>(0); // Состояние для viewCount
  const contentRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false); // Флаг для предотвращения двойного вызова

  useEffect(() => {
    if (!initialized.current) {
      const storedCount = localStorage.getItem('viewCount');
      if (storedCount === null) {
        // Если значения нет, установить 1
        localStorage.setItem('viewCount', '1');
        setViewCount(1);
      } else {
        // Если значение есть, увеличить на 1
        const newCount = Number(storedCount) + 1;
        localStorage.setItem('viewCount', String(newCount));
        setViewCount(newCount);
      }
      initialized.current = true; // Помечаем как инициализированное
    }
  }, []);

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

          <div className={`${styles.text} ${styles.date}`}>
            <Image
              src="/sign.png"
              alt="Подпись"
              style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
            />
            <Text size="lg">30.10.2024</Text>
          </div>

          <div>
            <div>{COPYRIGHT.first[language]}</div>
            <div>{COPYRIGHT.second[language]}</div>
          </div>

          <Text size="md" className={styles.text}>
            {VIEW_COUNT_TEXT[language]}
            {viewCount}
          </Text>

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
