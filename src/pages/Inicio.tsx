import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';
import { useParams } from 'react-router';
import '../css/Inicio.css';
import Ubicação from '../components/Geolocation';
import { IonSearchbar } from '@ionic/react';


const Inicio: React.FC = () => {  
  const { name } = useParams<{ name: string; }>();
  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>
        <IonContent fullscreen>
        <IonContent className="ion-padding">
      <div className="company-presentation">
    <h1>Bem-vindo à Happy-Car-Rent</h1>
    <p>Sua escolha para soluções de mobilidade inovadoras e confiáveis, projetadas para atender às suas necessidades de deslocamento com
       praticidade e eficiência. Desfrute da liberdade de explorar novos destinos, criando memórias inesquecíveis em cada viagem. 
       Na Happy-Car-Rent, comprometemo-nos a oferecer uma experiência de aluguel de carros excepcional, proporcionando não apenas veículos 
       de qualidade, mas também um serviço que você pode confiar. Torne suas jornadas mais emocionantes e confortáveis conosco, sua escolha 
       confiável para mobilidade confiável e inovadora..</p>
    <h1>Campanha Especial</h1>
  </div>

    
  <div className="black-friday-campaign">
    <img src="https://imagenes.elpais.com/resizer/Wdv9aRGgmuCH1aD8nrZdxguZTTc=/1960x1103/filters:focal(598x325:608x335)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/L72UFW2O3RBVNKJ4BBNVI2CKXE.png" alt="Banner Black Friday"/>
    <p>Aproveite ao máximo! Durante toda a semana da Black Friday, oferecemos descontos incríveis em aluguel de carros que tornarão 
      suas férias ainda mais especiais. Não perca a oportunidade de explorar novos destinos com um veículo alugado em condições exclusivas.
      Com descontos de até 40 % visite-nos durante a Black Friday e descubra as vantagens exclusivas que preparamos para tornar sua experiência
      de aluguel de carros ainda mais especial. Estamos animados para ser parte das suas férias e ajudar a criar memórias incríveis.
      Não perca esta oportunidade - ven
    </p>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Promoções Black Friday</IonCardTitle>
        <IonCardSubtitle>2024</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img  src="https://decodiaz.es/5022-large_default/etiquetas-adhesivas-10-rojoblanco-500-unidades.jpg" />
            </IonThumbnail>
            <IonLabel><h1>Promo Descubra10</h1></IonLabel>
            <p>Descubra novos destinos com 10% de desconto no aluguel do seu carro de férias! Reserve agora e aproveite a liberdade de explorar a seu próprio ritmo.</p>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img src="https://decodiaz.es/5023-home_default/etiquetas-adhesivas-20-rojoblanco-500-unidades.jpg" />
            </IonThumbnail>
            <IonLabel><h1>Oferta Aventure-se20</h1></IonLabel>
            <p>Aventure-se com 20% de desconto no aluguel do seu veículo! Seja você um aventureiro solo ou uma família em busca de diversão, nossos carros estão prontos para levá-lo à sua próxima grande aventura.</p>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img  src="https://decodiaz.es/5024-large_default/etiquetas-adhesivas-30-rojoblanco-500-unidades.jpg" />
            </IonThumbnail>
            <IonLabel><h1>Especial Relax30</h1></IonLabel>
            <p>Desfrute de umas férias relaxantes com 30% de desconto em todas as reservas de aluguel de carros! Permita-se o luxo de viajar com conforto e conveniência, sem comprometer seu orçamento.</p>
          
          </IonItem>
          
          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img  src="https://decodiaz.es/5025-large_default/etiquetas-adhesivas-40-rojoblanco-500-unidades.jpg" />
            </IonThumbnail>
            <IonLabel><h1>Super Viagem40</h1></IonLabel>
            <p>Faça uma super viagem com um desconto especial de 40% no aluguel do seu carro! Torne suas férias inesquecíveis, economizando enquanto viaja pelas estradas com um veículo de qualidade.</p>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  </div>

  <div className="awards">
    <h2>Orgulhosamente Reconhecidos</h2>
    <ul>
      <li>Melhor Empresa de Transporte - Prêmio EnerTech Visionário 2017</li>
      <li>Inovação em Mobilidade - Prêmio LogiMaster 2018</li>
      <li>Melhor Empresa de Tecnologia Sustentável - Prêmio EcoInovação 2021</li>
      <li>Excelência em Serviços de Logística - Prêmio LogiMaster 2023</li>
    </ul>
  </div>


  <div className="new-cars">
    <h1>Nossos veículos</h1>
    <img src="https://noticias.coches.com/wp-content/uploads/2022/02/berlinas-grandes-2023-700x357.jpeg" alt="Novos Modelos"/>
    <p>Descubra a nossa mais recente frota de veículos! Apresentamos com entusiasmo os modelos mais modernos e eficientes de marcas renomadas, 
       proporcionando não apenas viagens, mas uma experiência de condução excepcional. Desde veículos compactos ideais para viagens urbanas até 
       SUVs espaçosos e elegantes sedans, nossa frota diversificada atende a uma variedade de preferências e necessidades. Comprometemo-nos a 
       oferecer não apenas conforto e segurança, mas também um toque de luxo e estilo em cada jornada
    </p>
    <h1>Distancias a tiendas desde tu ubicación:</h1> 
 
 
  </div>


  
    <Ubicação />
   
      </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;