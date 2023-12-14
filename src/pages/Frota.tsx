import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonLabel,
  IonThumbnail,
  IonSearchbar,
} from '@ionic/react';
import { getInboxItems } from '../Utils/Veículos';
import FrotaModal from '../components/FrotaModal';
import '../css/Frota.css';

interface Veículos {
  categoria: any;
  id: number;
  nome: string;
  descripção: string;
  Dadostécnicos: {
    motor?: string;
    potencia?: string;
    transmissão?: string;
    combustível?: string;
    capacidade?: string;
  };
  Preço: string;
  storeId: number[];
  image: string;
}

const Frota: React.FC = () => {
  const [VeículoSelected, setVeículoSelected] = useState<Veículos | null>(null);
  const [Veículos] = useState<Veículos[]>(getInboxItems());
  const { storeId } = useParams<{ storeId?: string }>();

  const handleClickVeículo = async (Veículo: Veículos) => {
    setVeículoSelected(Veículo);
  };

  const handleCloseModal = () => {
    setVeículoSelected(null);
  };

  const VeículosOrdenados = Veículos.sort((a, b) => a.categoria.localeCompare(b.categoria));
  const VeículosFiltrados = storeId ? VeículosOrdenados.filter((Veículo) => Veículo.storeId.includes(parseInt(storeId, 10))) : VeículosOrdenados;

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
          
                  {VeículosFiltrados.map((Veículo, index) => (
            <IonCard key={`Veículo_${index}`} onClick={() => handleClickVeículo(Veículo)}>
              <IonCardHeader>
                <IonCardTitle>{Veículo.nome}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="thumbnail-container">
                  <IonThumbnail slot="start">
                    <img alt={Veículo.nome} src={Veículo.image} />
                  </IonThumbnail>
                  <div className="info-container">
                    <IonLabel>{Veículo.categoria}</IonLabel>
                  </div>
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
      <FrotaModal itemSelected={VeículoSelected} onClose={handleCloseModal} />
    </IonPage>
  );
};

export default Frota;
