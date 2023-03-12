import React from "react";

import Logo from "assets/HeaderImg/Logo.svg";
import Visa from "assets/FooterImg/Visa.svg";
import PayPal from "assets/FooterImg/PayPal.svg";
import MasterCard from "assets/FooterImg/MasterCard.svg";

import Viber from "assets/FooterImg/Viber.png";
import Skype from "assets/FooterImg/Skype.png";
import Messenger from "assets/FooterImg/Messenger.png";
import Telegram from "assets/FooterImg/Telegram.png";
import Facebook from "assets/FooterImg/Facebook.png";
import Vk from "assets/FooterImg/Vk.png";

import styles from "./styles.module.css";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerItems}>
        <div className={styles.footerItem}>
          <div className={styles.logoWrapper}>
            <img classname={styles.logoImg} src={Logo} alt='Logo'/>
            <div className={styles.logoTitles}>
              <div className={styles.logoTitle}>SNEAKERS</div>
              <div className={styles.logoSubtitle}>Best sneakers store</div>
            </div>
          </div>
          <div className={styles.footerInfo}>
            <div className={styles.caloricAndRights}>
              <p>Правовая информация</p>
            </div>
            <p className={styles.social}>Мы в соцсетях</p>
            <div className={styles.footerSocial}>
              <div className={styles.youTubeAndInstagram}>
                <p>YouTube</p>
                <p>Instagram</p>
              </div>
              <div className={styles.facebookAndVk}>
                <p>Facebook</p>
                <p>Вконтакте</p>
              </div>
            </div>
          </div>
          <div className={styles.footerRights}>
            <div className={styles.rightsReserved}>
              Sneakers Все права защищены © 2023
            </div>
            <div className={styles.cards}>
              <img classname={styles.cardImg} src={Visa} alt='Visa' />
              <img classname={styles.cardImg} src={PayPal} alt='PayPal' />
              <img classname={styles.cardImg} src={MasterCard} alt='MasterCard' />
            </div>
          </div>
        </div>
        <div className={styles.feedback}>
          <p className={styles.feedbackTitle}>
            Остались вопросы? А мы всегда на связи:
          </p>
          <div className={styles.feedbackBtnWrapper}>
            <button className={styles.feedbackBtn}>
              <img src={Viber} alt='Viber' />
            </button>
            <button className={styles.feedbackBtn}>
              <img src={Skype} alt='Skype' />
            </button>
            <button className={styles.feedbackBtn}>
              <img src={Messenger} alt='Messenger'/>
            </button>
            <button className={styles.feedbackBtn}>
              <img src={Telegram} alt='telegram' />
            </button>
            <button className={styles.feedbackBtn}>
              <img src={Facebook} alt='facebook'/>
            </button>
            <button className={styles.feedbackBtn}>
              <img src={Vk} alt='Vk'/>
            </button>
            <button className={styles.writeToUsBtn}>
              <p>Написать нам</p>
            </button>
          </div>
          <div className={styles.contacts}>
            <button className={styles.contactsBtn}>Заказать звонок</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
