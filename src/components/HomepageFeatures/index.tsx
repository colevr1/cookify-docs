import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <section className={clsx('padding-vert--md', styles.playgroundBackground)}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={styles.builtWith}>
                <img src="/img/frameworks/vanilla-js.svg" width={80} height={80} />
                <img src="/img/frameworks/react.svg" width={80} height={80} />
                <img className={styles.builtWithPlanned} src="/img/frameworks/vue-js.svg" width={80} height={80} />
                <img className={styles.builtWithPlanned} src="/img/frameworks/svelte.svg" width={80} height={80} />
                <img className={styles.builtWithPlanned} src="/img/frameworks/laravel.svg" width={80} height={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-vert--xl">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>What is Cookify?</h2>
              <p>This React library provides a customizable, simple to use and also a headless solution for creating a cookie consent manager and handling GDPR compliance. It is built specifically for React.js and offers a straightforward way to manage cookies and handle GDPR regulations in your React application.</p>
              
              <h2>What is about GDPR Compliance?</h2>
              <p>Cookify provides the logic to handle GDPR compliance corretly. How to handle GDPR correctly can be found on <a href="https://gdpr.eu/cookies">Cookies, the GDPR, and the ePrivacy Directive</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={clsx('padding-vert--xl', styles.playgroundBackground)}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Playground</h2>
              <p>Under construction 🏗️</p>

              <p>View and test how Cookify works in either <a href="https://jersyfi.github.io/cookify/test/preview/bootstrap.html">Bootstrap</a> or <a href="https://jersyfi.github.io/cookify/test/preview/tailwindcss.html">Tailwind CSS.</a></p>
              
              <h3>Themes</h3>
              <div className={styles.themes}>
                <div className={styles.themesRow}>
                  <div className={clsx(styles.theme, styles.themeActive)}>
                    <h4>Light</h4>
                    <p>default</p>
                    <img src="/img/themes/theme-light.png" width={250} />
                  </div>
                  <div className={styles.theme}>
                    <h4>Dark</h4>
                    <p>default</p>
                    <img src="/img/themes/theme-dark.png" width={250} />
                  </div>
                  <div className={styles.theme}>
                    <h4>High Contrast</h4>
                    <p>default</p>
                    <img src="/img/themes/theme-high-contrast.png" width={250} />
                  </div>
                </div>
                <div className={styles.themesRow}>
                  <div className={styles.theme}>
                    <h4>Jersyfi Light</h4>
                    <p>custom</p>
                    <img src="/img/themes/theme-custom-light.png" width={250} />
                  </div>
                  <div className={styles.theme}>
                    <h4>Jersyfi Dark</h4>
                    <p>custom</p>
                    <img src="/img/themes/theme-custom-dark.png" width={250} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
