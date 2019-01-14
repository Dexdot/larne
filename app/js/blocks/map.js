const mapCenter = { lat: 59.929714, lng: 30.354871 };
const mapStyles = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        saturation: 36
      },
      {
        color: '#000000'
      },
      {
        lightness: 40
      }
    ]
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on'
      },
      {
        color: '#000000'
      },
      {
        lightness: 16
      }
    ]
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 17
      },
      {
        weight: 1.2
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 21
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 17
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 29
      },
      {
        weight: 0.2
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 18
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 16
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 19
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 17
      }
    ]
  }
];
const mapSettings = {
  disableDefaultUI: true,
  scrollwheel: true
};
const iconUrl = '/img/map-icon.svg';

$(window).on('load', () => {
  // Карта в чекауте (Доставка)
  const deliveryMap = document.querySelector('.delivery__map');
  const initDeliveryMap = () => {
    // eslint-disable-next-line
    const map = new window.google.maps.Map(deliveryMap, {
      ...mapSettings,
      center: mapCenter,
      zoom: 16
    });
    map.setOptions({ styles: mapStyles });

    const icon = {
      url: iconUrl,
      scaledSize: new window.google.maps.Size(72, 72)
    };
    const locations = [{ lat: 59.929714, lng: 30.354871 }];

    locations.forEach(
      (location, i) =>
        new window.google.maps.Marker({
          position: locations[i],
          map,
          icon
        })
    );
  };
  if (deliveryMap) {
    try {
      initDeliveryMap();
    } catch (e) {
      console.error(e);
    }
  }

  // Карта в контактах
  const contactsMap = document.querySelector('.contacts-map');
  const initContactsMap = () => {
    const map = new window.google.maps.Map(contactsMap, {
      ...mapSettings,
      center: mapCenter,
      zoom: 15
    });
    map.setOptions({ styles: mapStyles });

    const icon = {
      url: iconUrl,
      scaledSize: new window.google.maps.Size(72, 72)
    };
    const locations = [{ lat: 59.929714, lng: 30.354871 }];

    locations.forEach(
      (location, i) =>
        new window.google.maps.Marker({
          position: locations[i],
          map,
          icon
        })
    );
  };
  if (contactsMap) {
    try {
      initContactsMap();
    } catch (e) {
      console.error(e);
    }
  }
});
