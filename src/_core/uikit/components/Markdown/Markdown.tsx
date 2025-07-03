import { FC, PropsWithChildren } from 'react';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import { Prism } from 'react-syntax-highlighter';

import styles from './Markdown.module.scss';

export type MarkdownProps = PropsWithChildren;

export const Markdown: FC<MarkdownProps> = ({ children }) => {
  if (typeof children !== 'string') return null;

  return (
    <div className={classNames(styles.root, 'text-muted')}>
      <ReactMarkdown
        skipHtml
        components={{
          h1: ({ children, className }) => (
            <h1 className={classNames(styles.h1, className)}>{children}</h1>
          ),
          h2: ({ children, className }) => (
            <h2 className={classNames(styles.h2, className)}>{children}</h2>
          ),
          h3: ({ children, className }) => (
            <h3 className={classNames(styles.h3, className)}>{children}</h3>
          ),
          p: ({ children }) => <p className={styles.p}>{children}</p>,
          img: ({ className, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
            <img className={classNames(className, styles.img)} {...props} />
          ),
          ul: ({ children, className }) => (
            <ul className={classNames(styles.ul, className)}>{children}</ul>
          ),
          code: ({ children, className = '' }) => {
            if (typeof children !== 'string') return null;

            const language = className.split('language-').join('');

            if (!language)
              return (
                <code
                  className={classNames(className, 'bg-light', styles.code)}
                >
                  {children}
                </code>
              );

            return (
              <Prism language={className.split('language-').join('')}>
                {children}
              </Prism>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};
