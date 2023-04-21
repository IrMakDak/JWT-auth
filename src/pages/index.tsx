import { useState, useEffect } from "react";
import { userService } from "../services/service";
import {
  StyledContentContainer,
  StyledH1,
  StyledMainInfo,
  StyledMainDescription,
  StyledMainButton,
  StyledMainPhotoContainer,
  StyledMainPhotoBg,
  StyledAdvantages,
  StyledAdvantagesItem,
} from "../styles/styledMain";
import { IUserNoPassword, srcStore } from "@/naming";

export default function Home() {
  const [users, setUsers] = useState<null | IUserNoPassword[]>(null);

  useEffect(() => {
    userService.getAll().then((x) => {
      setUsers(x);
    });
  }, []);

  return (
    <StyledContentContainer>
      <StyledMainInfo>
        <StyledH1>
          Голосовые ассистенты <span>SmartDialogs</span>
        </StyledH1>
        <StyledMainDescription>
          В звонках бот ведёт осмысленный диалог и совершенно неотличим
          от живого оператора. Автоматизируйте телефонные звонки с помощью ИИ.
        </StyledMainDescription>
        <StyledMainButton>Оставить заявку</StyledMainButton>
      </StyledMainInfo>
      <StyledMainPhotoBg>
        <StyledMainPhotoContainer src={`${srcStore}/photo.jpg`} alt="person" />
      </StyledMainPhotoBg>

      <StyledAdvantages>
        <StyledAdvantagesItem>
          <span>3 года на рынке</span>Более 1000 разработанных ботов в РФ
          и зарубежом
        </StyledAdvantagesItem>
        <StyledAdvantagesItem>
          <span>Честная цена</span>Оплата только за использованные минуты
        </StyledAdvantagesItem>
        <StyledAdvantagesItem>
          <span>Скорость</span>Запускаем проекты за 3 недели, не теряя
          в качестве
        </StyledAdvantagesItem>
        <StyledAdvantagesItem>
          <span>Личный кабинет</span>Отслеживание результатов звонков в личном
          кабинете
        </StyledAdvantagesItem>
      </StyledAdvantages>
    </StyledContentContainer>
  );
}
