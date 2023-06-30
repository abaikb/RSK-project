import React from "react";
import style from "./about.module.css"
import CarouselComponent from "../../components/carousel";

export const AboutPage = () => {
  return (
    <div className={style.container}>
      <div className={style.img_box}>
      <CarouselComponent/>
      </div>
      <div className={style.text_box}>
        <p className={style.subtitle}>Добро пожаловать в приложение РСК БАНК - вашему удобству и быстроте!
          Теперь вам больше не придется тратить свое время на бесконечное ожидание в очередях. Мы представляем вам наше новое приложение, которое позволит вам получить рано и избежать долгого ожидания в банке. Мы ожидаем, что это будет очень комфортное и быстрое обслуживание.</p>
        <ol className={style.list}>Что вы можете делать с официальным приложением:
          <li className={style.list_components}>Запишитесь на прием: Забудьте о стоянии в очереди! Теперь вы можете установить точное время посещения вашего банка прямо через приложение. Просто выберите необходимую услугу, удобное время, и ваша очередь будет заранее забронирована. Когда вы придете в банк, вас сразу обслужат, минуя ожидание.</li>
          <li className={style.list_components}>Уведомления о статусе: Больше не нужно думать о том, пропустили ли вашу очередь. Наше приложение будет держать вас в курсе событий. Вы будете получать поставку о ближайших окрестностях, записи о времени начала обслуживания и обо всех изменениях в расписании, если они возникнут. Таким образом, вы всегда будете в курсе и должны уметь планировать дела.</li>
          <li className={style.list_components}>Персонализированные рекомендации: Наше приложение будет принято вашими предпочтениями и историей посещения, чтобы предложить вам наиболее подходящие услуги и предложения. Вы можете получить персональные рекомендации и предложения, которые могут использоваться вашими финансами более оперативно.</li>
          <li className={style.list_components}>Простой и интуитивно понятный интерфейс: мы наблюдаем приложение, которое легко использовать и понимать. Интуитивно понятный интерфейс позволяет легко ориентироваться по всем функциям и быстро находить необходимую информацию.</li>
        </ol>
        <p className={style.paragraph}>Не откладывайте свое посещение банка на потом. Загрузите наше приложение РСК Банка прямо сейчас и начните пользоваться всеми преимуществами предварительной записи в ближайшее время. Получите доступ к потреблению, быстроте и отсутствию ожидания в очереди. Мы рады вас видеть в улучшении мирового обслуживания в РСК Банке!</p>
        <p className={style.last_paragraph}>С уважением, Команда РСК БАНКА</p>
      </div>
    </div>
  );
};
