import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonSearchbar } from '@ionic/react';
import { checkmark, closeCircleOutline } from 'ionicons/icons';
import { useState } from "react";
import "../css/Lojas.css";
import { getInboxItems } from '../Utils/DatosdaLojas';
import LojasModal from '../components/LojasModal';


interface DatosdaLojas {
  id: number;
  name: string;
  instructions: string;
  morada: string;
  latitude: number;
  longitude: number; 
}

const Lojas: React.FC = () => {

  const [itemSelected, setItemSelected] = useState<DatosdaLojas | null>(null);
  const [Lojas,] = useState<DatosdaLojas[]>(getInboxItems());

  const handleClickLojas = async (item: DatosdaLojas) => {
    setItemSelected(item);
  }

  const handleCloseModal = () => {
    setItemSelected(null);
  };



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
        <IonHeader collapse="condense">
        </IonHeader>
        <IonList>
          {Lojas.map((item, index) => (
            <IonItem onClick={() => handleClickLojas(item)} key={`item_${index}`} detail={true} lines="full" detailIcon={itemSelected === item ? checkmark : closeCircleOutline}>
              <IonLabel>
                <h2>{item.name}</h2>
                <h4>{item.morada}</h4>
                <p>{item.instructions}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <LojasModal itemSelected={itemSelected} onClose={handleCloseModal} />
    </IonPage>
  );
};

export default Lojas;
