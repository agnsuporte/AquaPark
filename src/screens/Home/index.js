import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Scroll,
  LocationArea,
  LocationInput,
  LocationFinder,
  ListArea,
  LocationClose,
} from './styles';

import data from './data';
import AquaParkItem from '../../components/AquaParkItem';

const Home  = props => {
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const navigation = useNavigation();
  const { navigation } = props;

  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  const [inFilter, setInFilter] = useState(false);

  const DATA = data;

  const ownerDetails = (owner) => {
    if(owner) {
      navigation.navigate('Details', {owner});
    }
  }

  const renderItem = ({ item }) => (
    <AquaParkItem item={item} ownerDetails={ownerDetails} />
  );

  const filterItems = (query) => {
    const newList = [...DATA]
    return newList.filter(el => {
      const name = el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
      const addr = el.address.toLowerCase().indexOf(query.toLowerCase()) > -1;
      const city = el.city.toLowerCase().indexOf(query.toLowerCase()) > -1;
      const region = el.region.toLowerCase().indexOf(query.toLowerCase()) > -1;

      return name || addr || city || region;
    });
  };

  const setFilter =  () => {
    const query = input.trim();
    if(query.length > 0) {
      const filter = filterItems(query);
      setInFilter(true);
      setList(filter);
    }
  }

  const clearFilter =  () => {
    setInput('');
    setInFilter(false);
    setList(DATA);
  }

  useEffect(() => {
    setList(DATA);
  }, []);

  return (
    <Container>
      <LocationArea>
        <LocationInput
          value={input}
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar proprietário..."
        />
        { inFilter &&
          <LocationClose onPress={clearFilter}>
            <Icon name="times" size={25} color="#EB5757" />
          </LocationClose>        
        }
        <LocationFinder onPress={setFilter}>
          <Icon name="search" size={25} color="#fff" />
        </LocationFinder>
      </LocationArea>

      <ListArea
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default Home;
