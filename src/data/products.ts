export interface Product {
  code: string;
  name: string;
  category: string;
  subcategory: string;
  brand: string;
  description: string;
  image: string;
}

export const productsDatabase: Product[] = [
  // CORREAS
  {
    code: 'COR-V-001',
    name: 'Correa en V A68',
    category: 'Correas',
    subcategory: 'Correas en V',
    brand: 'Gates',
    description: 'Correa en V perfil A, longitud 68 pulgadas. Alta resistencia y durabilidad.',
    image: 'https://via.placeholder.com/300x200?text=Correa+V+Gates'
  },
  {
    code: 'COR-V-002',
    name: 'Correa en V B42',
    category: 'Correas',
    subcategory: 'Correas en V',
    brand: 'Mitsuba',
    description: 'Correa en V perfil B para transmisión industrial pesada.',
    image: 'https://via.placeholder.com/300x200?text=Correa+V+Mitsuba'
  },
  {
    code: 'COR-D-001',
    name: 'Correa Dentada HTD 5M',
    category: 'Correas',
    subcategory: 'Correas Dentadas',
    brand: 'Mitsuba',
    description: 'Correa dentada HTD paso 5mm, sincronización precisa.',
    image: 'https://via.placeholder.com/300x200?text=Correa+Dentada'
  },
  {
    code: 'COR-D-002',
    name: 'Correa Dentada 8M-2000',
    category: 'Correas',
    subcategory: 'Correas Dentadas',
    brand: 'Megadyne',
    description: 'Correa dentada de alta precisión para maquinaria industrial.',
    image: 'https://via.placeholder.com/300x200?text=Correa+Dentada+8M'
  },
  {
    code: 'COR-VA-001',
    name: 'Correa Variadora 22x1000',
    category: 'Correas',
    subcategory: 'Correas Variadoras',
    brand: 'PIX',
    description: 'Correa variadora de velocidad para sistemas de transmisión.',
    image: 'https://via.placeholder.com/300x200?text=Correa+Variadora'
  },
  {
    code: 'COR-AC-001',
    name: 'Correa Acanalada PK1200',
    category: 'Correas',
    subcategory: 'Correas Acanaladas',
    brand: 'Gates',
    description: 'Correa acanalada multi-estriada para equipos de alta velocidad.',
    image: 'https://via.placeholder.com/300x200?text=Correa+Acanalada'
  },
  {
    code: 'COR-V-003',
    name: 'Correa en V C90',
    category: 'Correas',
    subcategory: 'Correas en V',
    brand: 'Perfect Power',
    description: 'Correa industrial perfil C para aplicaciones pesadas.',
    image: 'https://via.placeholder.com/300x200?text=Correa+V+C90'
  },
  {
    code: 'COR-D-003',
    name: 'Correa Dentada T5-500',
    category: 'Correas',
    subcategory: 'Correas Dentadas',
    brand: 'Gates',
    description: 'Correa sincronizada paso T5 para maquinaria de precisión.',
    image: 'https://via.placeholder.com/300x200?text=Correa+T5'
  },

  // MANGUERAS
  {
    code: 'MAN-H-001',
    name: 'Manguera Hidráulica R2 1/2"',
    category: 'Mangueras',
    subcategory: 'Mangueras Hidráulicas',
    brand: 'Pabovi',
    description: 'Manguera hidráulica de alta presión con doble trenzado de acero.',
    image: 'https://via.placeholder.com/300x200?text=Manguera+Hidraulica'
  },
  {
    code: 'MAN-H-002',
    name: 'Manguera Hidráulica R1 3/4"',
    category: 'Mangueras',
    subcategory: 'Mangueras Hidráulicas',
    brand: 'Jason',
    description: 'Manguera hidráulica para sistemas de alta presión.',
    image: 'https://via.placeholder.com/300x200?text=Manguera+R1'
  },
  {
    code: 'MAN-S-001',
    name: 'Manguera de Succión 2"',
    category: 'Mangueras',
    subcategory: 'Mangueras de Succión y de Descarga',
    brand: 'ZMTE',
    description: 'Manguera de succión y descarga para líquidos y sólidos.',
    image: 'https://via.placeholder.com/300x200?text=Manguera+Succión'
  },
  {
    code: 'MAN-M-001',
    name: 'Manguera Multiusos 3/8"',
    category: 'Mangueras',
    subcategory: 'Mangueras Multiusos',
    brand: 'Semper',
    description: 'Manguera multiusos para aire, agua y aceites.',
    image: 'https://via.placeholder.com/300x200?text=Manguera+Multiusos'
  },
  {
    code: 'MAN-N-001',
    name: 'Manguera Neumática 6mm',
    category: 'Mangueras',
    subcategory: 'Mangueras Neumaticas',
    brand: 'Pabovi',
    description: 'Manguera neumática de poliuretano para aire comprimido.',
    image: 'https://via.placeholder.com/300x200?text=Manguera+Neumática'
  },

  // RODAMIENTOS
  {
    code: 'ROD-R-001',
    name: 'Rodamiento de Rodillos 22316',
    category: 'Rodamientos',
    subcategory: 'Rodamientos de Rodillos',
    brand: 'SKF',
    description: 'Rodamiento de rodillos esféricos para cargas pesadas.',
    image: 'https://via.placeholder.com/300x200?text=Rodamiento+Rodillos'
  },
  {
    code: 'ROD-B-001',
    name: 'Rodamiento de Bolas 6205',
    category: 'Rodamientos',
    subcategory: 'Rodamientos de Bolas',
    brand: 'FAG',
    description: 'Rodamiento de bolas de ranura profunda.',
    image: 'https://via.placeholder.com/300x200?text=Rodamiento+Bolas'
  },
  {
    code: 'ROD-B-002',
    name: 'Rodamiento de Bolas 6308',
    category: 'Rodamientos',
    subcategory: 'Rodamientos de Bolas',
    brand: 'NSK',
    description: 'Rodamiento de bolas para aplicaciones industriales.',
    image: 'https://via.placeholder.com/300x200?text=Rodamiento+6308'
  },
  {
    code: 'ROD-A-001',
    name: 'Rodamiento de Agujas HK2520',
    category: 'Rodamientos',
    subcategory: 'Rodamientos de Agujas',
    brand: 'INA',
    description: 'Rodamiento de agujas sin anillo interior.',
    image: 'https://via.placeholder.com/300x200?text=Rodamiento+Agujas'
  },
  {
    code: 'ROD-AX-001',
    name: 'Rodamiento Axial 51205',
    category: 'Rodamientos',
    subcategory: 'Rodamientos Axiales',
    brand: 'NTN',
    description: 'Rodamiento axial de bolas para cargas unidireccionales.',
    image: 'https://via.placeholder.com/300x200?text=Rodamiento+Axial'
  },
  {
    code: 'ROD-L-001',
    name: 'Rodamiento Lineal LM20UU',
    category: 'Rodamientos',
    subcategory: 'Rodamientos Lineales',
    brand: 'THK',
    description: 'Rodamiento lineal para guías de desplazamiento.',
    image: 'https://via.placeholder.com/300x200?text=Rodamiento+Lineal'
  },
  {
    code: 'ROD-E-001',
    name: 'Rodamiento Esférico 22218',
    category: 'Rodamientos',
    subcategory: 'Rodamientos Esfericos',
    brand: 'FBJ',
    description: 'Rodamiento de rodillos esféricos autoalineable.',
    image: 'https://via.placeholder.com/300x200?text=Rodamiento+Esferico'
  },
  {
    code: 'ROD-C-001',
    name: 'Rodamiento Cilíndrico NU216',
    category: 'Rodamientos',
    subcategory: 'Rodamientos Cilindricos',
    brand: 'KFB',
    description: 'Rodamiento de rodillos cilíndricos de una hilera.',
    image: 'https://via.placeholder.com/300x200?text=Rodamiento+Cilindrico'
  },
  {
    code: 'ROD-CA-001',
    name: 'Rodamiento Contacto Angular 7210',
    category: 'Rodamientos',
    subcategory: 'Rodamientos de Contacto Angular',
    brand: 'F&D',
    description: 'Rodamiento de contacto angular para cargas combinadas.',
    image: 'https://via.placeholder.com/300x200?text=Contacto+Angular'
  },
  {
    code: 'ROD-CH-001',
    name: 'Chumacera UCP205',
    category: 'Rodamientos',
    subcategory: 'Chumaceras',
    brand: 'SKF',
    description: 'Chumacera con rodamiento de bolas insertado.',
    image: 'https://via.placeholder.com/300x200?text=Chumacera'
  },

  // RETENES Y SELLOS
  {
    code: 'RET-001',
    name: 'Retén SKF 30x52x7',
    category: 'Retenes, Sellos y O-rings',
    subcategory: 'Retenes',
    brand: 'SKF',
    description: 'Retén de labio para ejes rotativos.',
    image: 'https://via.placeholder.com/300x200?text=Retén+SKF'
  },
  {
    code: 'RET-002',
    name: 'Retén 40x62x8',
    category: 'Retenes, Sellos y O-rings',
    subcategory: 'Retenes',
    brand: 'SAV',
    description: 'Retén industrial de alta calidad.',
    image: 'https://via.placeholder.com/300x200?text=Retén+SAV'
  },
  {
    code: 'SEL-M-001',
    name: 'Sello Mecánico Tipo 21',
    category: 'Retenes, Sellos y O-rings',
    subcategory: 'Sellos Mecánicos',
    brand: 'ARCA',
    description: 'Sello mecánico para bombas centrifugas.',
    image: 'https://via.placeholder.com/300x200?text=Sello+Mecánico'
  },
  {
    code: 'OR-001',
    name: 'O-Ring 20x2.5 NBR',
    category: 'Retenes, Sellos y O-rings',
    subcategory: 'O-Rings',
    brand: 'GMORS',
    description: 'O-Ring de nitrilo para aplicaciones hidráulicas.',
    image: 'https://via.placeholder.com/300x200?text=O-Ring'
  },
  {
    code: 'SEL-H-001',
    name: 'Sello Hidráulico U-Cup',
    category: 'Retenes, Sellos y O-rings',
    subcategory: 'Sellos Hidráulicos',
    brand: 'HERCULES',
    description: 'Sello tipo U para cilindros hidráulicos.',
    image: 'https://via.placeholder.com/300x200?text=Sello+Hidraulico'
  },
  {
    code: 'SEL-N-001',
    name: 'Sello Neumático Pistón',
    category: 'Retenes, Sellos y O-rings',
    subcategory: 'Sellos Neumáticos',
    brand: 'APC',
    description: 'Sello para pistones neumáticos.',
    image: 'https://via.placeholder.com/300x200?text=Sello+Neumático'
  },

  // BANDAS TRANSPORTADORAS PESADAS
  {
    code: 'BTP-L-001',
    name: 'Banda Lisa EP200 500mm',
    category: 'Bandas Transportadoras Pesadas',
    subcategory: 'Bandas Lisas',
    brand: 'Correas Center',
    description: 'Banda transportadora lisa para minería e industria pesada.',
    image: 'https://via.placeholder.com/300x200?text=Banda+Lisa'
  },
  {
    code: 'BTP-N-001',
    name: 'Banda Nervada EP300',
    category: 'Bandas Transportadoras Pesadas',
    subcategory: 'Bandas Nervadas',
    brand: 'Correas Center',
    description: 'Banda con nervaduras transversales para transporte inclinado.',
    image: 'https://via.placeholder.com/300x200?text=Banda+Nervada'
  },
  {
    code: 'BTP-V-001',
    name: 'Banda Vertical Cleat',
    category: 'Bandas Transportadoras Pesadas',
    subcategory: 'Bandas Verticales',
    brand: 'Correas Center',
    description: 'Banda con perfiles para transporte vertical.',
    image: 'https://via.placeholder.com/300x200?text=Banda+Vertical'
  },
  {
    code: 'BTP-B-001',
    name: 'Banda con Bordes Laterales',
    category: 'Bandas Transportadoras Pesadas',
    subcategory: 'Bandas con Bordes',
    brand: 'Correas Center',
    description: 'Banda con bordes elevados para contener material.',
    image: 'https://via.placeholder.com/300x200?text=Banda+Bordes'
  },
  {
    code: 'BTP-C-001',
    name: 'Banda Corrugada Sidewall',
    category: 'Bandas Transportadoras Pesadas',
    subcategory: 'Bandas Corrugadas',
    brand: 'Correas Center',
    description: 'Banda corrugada con faldones laterales.',
    image: 'https://via.placeholder.com/300x200?text=Banda+Corrugada'
  },

  // BANDAS TRANSPORTADORAS LIVIANAS
  {
    code: 'BTL-S-001',
    name: 'Banda Sintética PVC',
    category: 'Bandas Transportadoras Livianas',
    subcategory: 'Bandas Sinteticas',
    brand: 'Correas Center',
    description: 'Banda sintética para industria alimenticia.',
    image: 'https://via.placeholder.com/300x200?text=Banda+Sintética'
  },
  {
    code: 'BTL-M-001',
    name: 'Banda Modular Plástica',
    category: 'Bandas Transportadoras Livianas',
    subcategory: 'Bandas Modulares',
    brand: 'Correas Center',
    description: 'Banda modular para procesos de lavado y secado.',
    image: 'https://via.placeholder.com/300x200?text=Banda+Modular'
  },
  {
    code: 'BTL-P-001',
    name: 'Banda de PTFE Teflón',
    category: 'Bandas Transportadoras Livianas',
    subcategory: 'Bandas de PTFE',
    brand: 'Correas Center',
    description: 'Banda antiadherente de teflón para hornos.',
    image: 'https://via.placeholder.com/300x200?text=Banda+PTFE'
  },
  {
    code: 'BTL-H-001',
    name: 'Banda Homogénea PU',
    category: 'Bandas Transportadoras Livianas',
    subcategory: 'Bandas Homogéneas',
    brand: 'Correas Center',
    description: 'Banda homogénea de poliuretano.',
    image: 'https://via.placeholder.com/300x200?text=Banda+Homogénea'
  },
  {
    code: 'BTL-CL-001',
    name: 'Banda de Caucho Ligera',
    category: 'Bandas Transportadoras Livianas',
    subcategory: 'Bandas de Caucho Ligeras',
    brand: 'Correas Center',
    description: 'Banda de caucho para transporte ligero.',
    image: 'https://via.placeholder.com/300x200?text=Banda+Caucho'
  },

  // CADENAS
  {
    code: 'CAD-RP-001',
    name: 'Cadena de Rodillos 08B-1',
    category: 'Cadenas',
    subcategory: 'Cadenas de Rodillos de Precisión',
    brand: 'Tsubaki',
    description: 'Cadena de rodillos de precisión para transmisión.',
    image: 'https://via.placeholder.com/300x200?text=Cadena+Rodillos'
  },
  {
    code: 'CAD-AI-001',
    name: 'Cadena Acero Inoxidable 06B',
    category: 'Cadenas',
    subcategory: 'Cadenas de Acero Inoxidable',
    brand: 'Tsubaki',
    description: 'Cadena resistente a la corrosión para industria alimenticia.',
    image: 'https://via.placeholder.com/300x200?text=Cadena+Inox'
  },
  {
    code: 'CAD-T-001',
    name: 'Cadena de Transmisión 10B-2',
    category: 'Cadenas',
    subcategory: 'Cadenas de Transmisión',
    brand: 'DID',
    description: 'Cadena de transmisión doble hilera.',
    image: 'https://via.placeholder.com/300x200?text=Cadena+Transmisión'
  },
  {
    code: 'CAD-TR-001',
    name: 'Cadena con Transportador',
    category: 'Cadenas',
    subcategory: 'Cadenas con Transportador',
    brand: 'Correas Center',
    description: 'Cadena con placas de transporte.',
    image: 'https://via.placeholder.com/300x200?text=Cadena+Transportador'
  },
  {
    code: 'CAD-AG-001',
    name: 'Cadena Agrícola A2040',
    category: 'Cadenas',
    subcategory: 'Cadenas Agricolas',
    brand: 'Correas Center',
    description: 'Cadena para maquinaria agrícola.',
    image: 'https://via.placeholder.com/300x200?text=Cadena+Agrícola'
  },

  // POLEAS
  {
    code: 'POL-V-001',
    name: 'Polea SPB 125',
    category: 'Poleas',
    subcategory: 'Poleas en V de Taladro Conico Y Cilindrico',
    brand: 'Correas Center',
    description: 'Polea en V para correas SPB.',
    image: 'https://via.placeholder.com/300x200?text=Polea+V'
  },
  {
    code: 'POL-S-001',
    name: 'Polea Sincrona 8M-30',
    category: 'Poleas',
    subcategory: 'Poleas Sincronas',
    brand: 'Correas Center',
    description: 'Polea sincronizada para correas dentadas.',
    image: 'https://via.placeholder.com/300x200?text=Polea+Sincrona'
  },
  {
    code: 'POL-M-001',
    name: 'Polea MI-Lock 3V',
    category: 'Poleas',
    subcategory: 'Poleas MI-Lock',
    brand: 'Correas Center',
    description: 'Polea con sistema de fijación MI-Lock.',
    image: 'https://via.placeholder.com/300x200?text=Polea+MI-Lock'
  },

  // PIÑONES
  {
    code: 'PIÑ-TC-001',
    name: 'Piñón 08B-1 18 dientes',
    category: 'Piñones',
    subcategory: 'Piñónes de taladro cónico',
    brand: 'Correas Center',
    description: 'Piñón para cadena 08B con taladro cónico.',
    image: 'https://via.placeholder.com/300x200?text=Piñón'
  },
  {
    code: 'PIÑ-AP-001',
    name: 'Piñón 10B-1 20 dientes AP',
    category: 'Piñones',
    subcategory: 'Piñónes con agujero piloto',
    brand: 'Correas Center',
    description: 'Piñón con agujero piloto para cadena 10B.',
    image: 'https://via.placeholder.com/300x200?text=Piñón+AP'
  },
  {
    code: 'PIÑ-TC2-001',
    name: 'Piñón Doble 08B-2',
    category: 'Piñones',
    subcategory: 'Piñónes simples de taladro cónico para 2 cadenas',
    brand: 'Correas Center',
    description: 'Piñón doble para dos cadenas 08B.',
    image: 'https://via.placeholder.com/300x200?text=Piñón+Doble'
  },
  {
    code: 'PIÑ-AP2-001',
    name: 'Piñón Doble 10B-2 AP',
    category: 'Piñones',
    subcategory: 'Piñónes simples con agujero piloto para 2 cadenas',
    brand: 'Correas Center',
    description: 'Piñón doble con agujero piloto.',
    image: 'https://via.placeholder.com/300x200?text=Piñón+Doble+AP'
  },

  // NIPLES Y CONEXIONES
  {
    code: 'NIP-H-001',
    name: 'Niple Hidráulico 1/2" BSP',
    category: 'Niples, Conexiones y Conectores Hidraúlicos',
    subcategory: 'Niples Hidráulicos',
    brand: 'Correas Center',
    description: 'Niple hidráulico de alta presión.',
    image: 'https://via.placeholder.com/300x200?text=Niple'
  },
  {
    code: 'NIP-C-001',
    name: 'Niple de Cobre 3/8"',
    category: 'Niples, Conexiones y Conectores Hidraúlicos',
    subcategory: 'Niples de Cobre',
    brand: 'Correas Center',
    description: 'Niple de cobre para conexiones neumáticas.',
    image: 'https://via.placeholder.com/300x200?text=Niple+Cobre'
  },
  {
    code: 'CON-R-001',
    name: 'Conexión Rápida 3/8"',
    category: 'Niples, Conexiones y Conectores Hidraúlicos',
    subcategory: 'Conexiones Rápidas',
    brand: 'Correas Center',
    description: 'Conexión rápida para sistemas neumáticos.',
    image: 'https://via.placeholder.com/300x200?text=Conexión+Rápida'
  },
  {
    code: 'ADP-001',
    name: 'Adaptador BSP a NPT',
    category: 'Niples, Conexiones y Conectores Hidraúlicos',
    subcategory: 'Adaptadores',
    brand: 'Correas Center',
    description: 'Adaptador de roscas BSP a NPT.',
    image: 'https://via.placeholder.com/300x200?text=Adaptador'
  },
  {
    code: 'CON-RP-001',
    name: 'Conector Rápido Macho',
    category: 'Niples, Conexiones y Conectores Hidraúlicos',
    subcategory: 'Conectores Rápidos',
    brand: 'Correas Center',
    description: 'Conector rápido tipo macho.',
    image: 'https://via.placeholder.com/300x200?text=Conector+Macho'
  },

  // CILINDROS
  {
    code: 'CIL-N-001',
    name: 'Cilindro Neumático 40x100',
    category: 'Cilindros Hidraúlicos y Neumáticos',
    subcategory: 'Cilindros Neumáticos',
    brand: 'SMC',
    description: 'Cilindro neumático de doble efecto.',
    image: 'https://via.placeholder.com/300x200?text=Cilindro+Neumático'
  },
  {
    code: 'CIL-HTR-001',
    name: 'Cilindro HTR 63x200',
    category: 'Cilindros Hidraúlicos y Neumáticos',
    subcategory: 'Cilindros HTR (Tirantes)',
    brand: 'Correas Center',
    description: 'Cilindro hidráulico tipo HTR con tirantes.',
    image: 'https://via.placeholder.com/300x200?text=Cilindro+HTR'
  },
  {
    code: 'CIL-HCW-001',
    name: 'Cilindro HCW 80x300',
    category: 'Cilindros Hidraúlicos y Neumáticos',
    subcategory: 'Cilindros HCW (Patentado)',
    brand: 'Correas Center',
    description: 'Cilindro hidráulico patentado HCW.',
    image: 'https://via.placeholder.com/300x200?text=Cilindro+HCW'
  },

  // CANGILONES
  {
    code: 'CAN-HD-001',
    name: 'Cangilón HD Stax 6x4',
    category: 'Cangilones',
    subcategory: 'Cangilones HD Stax (Heavy Duty)',
    brand: 'Correas Center',
    description: 'Cangilón de alta resistencia para elevadores.',
    image: 'https://via.placeholder.com/300x200?text=Cangilón'
  },
  {
    code: 'CAN-NY-001',
    name: 'Cangilón de Nylon 5x3',
    category: 'Cangilones',
    subcategory: 'Cangilones de Nylon',
    brand: 'Correas Center',
    description: 'Cangilón de nylon para productos alimenticios.',
    image: 'https://via.placeholder.com/300x200?text=Cangilón+Nylon'
  },
  {
    code: 'CAN-PU-001',
    name: 'Cangilón de Poliuretano 4x3',
    category: 'Cangilones',
    subcategory: 'Cangilones de Poliuretano',
    brand: 'Correas Center',
    description: 'Cangilón de poliuretano resistente al desgaste.',
    image: 'https://via.placeholder.com/300x200?text=Cangilón+PU'
  },
  {
    code: 'CAN-P-001',
    name: 'Perno para Cangilón M8',
    category: 'Cangilones',
    subcategory: 'Pernos',
    brand: 'Correas Center',
    description: 'Perno especial para fijación de cangilones.',
    image: 'https://via.placeholder.com/300x200?text=Perno'
  },
  {
    code: 'CAN-G-001',
    name: 'Grapa de Empalme Mecánico',
    category: 'Cangilones',
    subcategory: 'Grapas de Empalme Mécanico',
    brand: 'Correas Center',
    description: 'Grapa para empalme mecánico de bandas.',
    image: 'https://via.placeholder.com/300x200?text=Grapa'
  },
  {
    code: 'CAN-L-001',
    name: 'Laterales Sky Rubbers',
    category: 'Cangilones',
    subcategory: 'Laterales(Sky Rubbers)',
    brand: 'Sky Rubbers',
    description: 'Laterales de goma para cangilones.',
    image: 'https://via.placeholder.com/300x200?text=Laterales'
  },

  // CARDANES
  {
    code: 'CAR-A-001',
    name: 'Cardán Agrícola Tipo 1',
    category: 'Cardanes',
    subcategory: 'Cardanes Agricolas',
    brand: 'Correas Center',
    description: 'Cardán para maquinaria agrícola.',
    image: 'https://via.placeholder.com/300x200?text=Cardán'
  },

  // CAJAS DE COMANDOS
  {
    code: 'CAJ-1P-001',
    name: 'Caja de Comando 1 Palanca',
    category: 'Cajas de Comandos',
    subcategory: 'Caja de Comando de 1 Palanca',
    brand: 'Correas Center',
    description: 'Caja de comando hidráulico de 1 palanca.',
    image: 'https://via.placeholder.com/300x200?text=Caja+Comando+1P'
  },
  {
    code: 'CAJ-2P-001',
    name: 'Caja de Comando 2 Palancas',
    category: 'Cajas de Comandos',
    subcategory: 'Caja de Comandos de 2 Palancas',
    brand: 'Correas Center',
    description: 'Caja de comando hidráulico de 2 palancas.',
    image: 'https://via.placeholder.com/300x200?text=Caja+Comando+2P'
  },
  {
    code: 'CAJ-3P-001',
    name: 'Caja de Comando 3 Palancas',
    category: 'Cajas de Comandos',
    subcategory: 'Caja de Comandos de 3 Palancas',
    brand: 'Correas Center',
    description: 'Caja de comando hidráulico de 3 palancas.',
    image: 'https://via.placeholder.com/300x200?text=Caja+Comando+3P'
  },
  {
    code: 'CAJ-4P-001',
    name: 'Caja de Comando 4 Palancas',
    category: 'Cajas de Comandos',
    subcategory: 'Caja de Comandos de 4 Palancas',
    brand: 'Correas Center',
    description: 'Caja de comando hidráulico de 4 palancas.',
    image: 'https://via.placeholder.com/300x200?text=Caja+Comando+4P'
  },
  {
    code: 'CAJ-5P-001',
    name: 'Caja de Comando 5 Palancas',
    category: 'Cajas de Comandos',
    subcategory: 'Caja de Comandos de 5 Palancas',
    brand: 'Correas Center',
    description: 'Caja de comando hidráulico de 5 palancas.',
    image: 'https://via.placeholder.com/300x200?text=Caja+Comando+5P'
  },
  {
    code: 'CAJ-6P-001',
    name: 'Caja de Comando 6 Palancas',
    category: 'Cajas de Comandos',
    subcategory: 'Caja de Comandos de 6 Palancas',
    brand: 'Correas Center',
    description: 'Caja de comando hidráulico de 6 palancas.',
    image: 'https://via.placeholder.com/300x200?text=Caja+Comando+6P'
  },

  // ABRAZADERAS
  {
    code: 'ABR-G-001',
    name: 'Abrazadera Galvanizada 2"',
    category: 'Abrazaderas',
    subcategory: 'Abrazaderas Galvanizadas',
    brand: 'Correas Center',
    description: 'Abrazadera galvanizada para mangueras.',
    image: 'https://via.placeholder.com/300x200?text=Abrazadera'
  },
  {
    code: 'ABR-I-001',
    name: 'Abrazadera Inoxidable 1.5"',
    category: 'Abrazaderas',
    subcategory: 'Abrazaderas Inoxidables',
    brand: 'Correas Center',
    description: 'Abrazadera de acero inoxidable.',
    image: 'https://via.placeholder.com/300x200?text=Abrazadera+Inox'
  },
  {
    code: 'ABR-T-001',
    name: 'Abrazadera de Tornillo 3"',
    category: 'Abrazaderas',
    subcategory: 'Abrazaderas de Tornillo',
    brand: 'Correas Center',
    description: 'Abrazadera con tornillo de sujeción.',
    image: 'https://via.placeholder.com/300x200?text=Abrazadera+Tornillo'
  },
  {
    code: 'ABR-A-001',
    name: 'Abrazadera de Alambre 1"',
    category: 'Abrazaderas',
    subcategory: 'Abrazaderas de Alambre',
    brand: 'Correas Center',
    description: 'Abrazadera tipo alambre con resorte.',
    image: 'https://via.placeholder.com/300x200?text=Abrazadera+Alambre'
  },

  // SERVICIOS
  {
    code: 'SER-FS-001',
    name: 'Fabricación de Sellos SKF',
    category: 'Servicios',
    subcategory: 'Fabricación de Sellos SKF',
    brand: 'SKF',
    description: 'Servicio de fabricación de sellos autorizados SKF.',
    image: 'https://via.placeholder.com/300x200?text=Servicio+SKF'
  },
  {
    code: 'SER-PM-001',
    name: 'Prensado de Mangueras',
    category: 'Servicios',
    subcategory: 'Prensado de Mangueras',
    brand: 'Correas Center',
    description: 'Servicio de prensado de mangueras hidráulicas.',
    image: 'https://via.placeholder.com/300x200?text=Prensado'
  },
  {
    code: 'SER-RC-001',
    name: 'Reparación de Cilindros',
    category: 'Servicios',
    subcategory: 'Reparacion de Cilindros',
    brand: 'Correas Center',
    description: 'Reparación y mantenimiento de cilindros hidráulicos.',
    image: 'https://via.placeholder.com/300x200?text=Reparación'
  },
  {
    code: 'SER-FO-001',
    name: 'Fabricación de O-rings',
    category: 'Servicios',
    subcategory: 'Fabricación de O-rings',
    brand: 'Correas Center',
    description: 'Fabricación de O-rings a medida.',
    image: 'https://via.placeholder.com/300x200?text=O-Ring+Fab'
  },
  {
    code: 'SER-ATI-001',
    name: 'Asesoría Técnica Industrial',
    category: 'Servicios',
    subcategory: 'Asesoria Tecnica Industrial',
    brand: 'Correas Center',
    description: 'Consultoría especializada en sistemas industriales.',
    image: 'https://via.placeholder.com/300x200?text=Asesoría'
  },
  {
    code: 'SER-EB-001',
    name: 'Empalmes y Montaje de Bandas',
    category: 'Servicios',
    subcategory: 'Empalmes y Montaje de Bandas Transportadoras Pesadas y Livianas',
    brand: 'Correas Center',
    description: 'Servicio de empalmes y montaje de bandas transportadoras.',
    image: 'https://via.placeholder.com/300x200?text=Empalmes'
  }
];

export const brands = [
  'Gates', 'Mitsuba', 'Megadyne', 'PIX', 'Perfect Power',
  'Jason', 'ZMTE', 'Pabovi', 'Semper',
  'SKF', 'FAG', 'INA', 'NSK', 'NTN', 'FBJ', 'KFB', 'F&D',
  'SAV', 'ARCA', 'GMORS', 'HERCULES', 'APC', 'WORLD GASKET'
];