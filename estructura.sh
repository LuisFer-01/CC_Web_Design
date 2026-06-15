#!/bin/bash

# Crear carpetas de Products
mkdir -p src/app/components/views/products/{components,hooks}
mkdir -p src/app/components/views/products/categories/{correas/{correas-v,correas-dentadas,correas-variadoras,correas-acanaladas},mangueras/{hidraulicas,succion-descarga,multiusos,neumaticas},rodamientos/{rodillos,bolas,agujas,axiales,lineales,esfericos,cilindricos,contacto-angular,chumaceras},retenes-sellos-orings/{retenes,sellos-mecanicos,o-rings,sellos-hidraulicos,sellos-neumaticos},bandas-transportadoras/{pesadas,livianas},cadenas/{rodillos-precision,acero-inoxidable,transmision,con-transportador,agricolas},poleas/{taladro-conico,sincronas,mi-lock},pinones/{taladro-conico,agujero-piloto,taladro-conico-2-cadenas,agujero-piloto-2-cadenas},niples-conexiones/{hidraulicos,cobre,conexiones-rapidas,adaptadores,conectores-rapidos},cilindros/{neumaticos,htr-tirantes,hcw-patentado},cangilones/{hd-stax,nylon,poliuretano,pernos,grapas-empalme,laterales},cardanes/agricolas,cajas-comandos/{palanca-1,palancas-2,palancas-3,palancas-4,palancas-5,palancas-6},abrazaderas/{galvanizadas,inoxidables,tornillo,alambre}}

# Crear carpetas de Applications
mkdir -p src/app/components/views/applications/components

# Crear archivos de Products
touch src/app/components/views/products/index.tsx
touch src/app/components/views/products/components/{ProductCard,CategoryGrid,SubcategoryList,ProductFilters,ProductDetail,RelatedProducts,CompareModal}.tsx
touch src/app/components/views/products/hooks/{useProducts,useFilters}.ts

# Crear archivos de categorías
for cat in correas mangueras rodamientos retenes-sellos-orings bandas-transportadoras cadenas poleas pinones niples-conexiones cilindros cangilones cardanes cajas-comandos abrazaderas; do
  touch src/app/components/views/products/categories/$cat/index.tsx
done

# Crear archivos de subcategorías
for sub in correas/correas-v correas/correas-dentadas correas/correas-variadoras correas/correas-acanaladas mangueras/hidraulicas mangueras/succion-descarga mangueras/multiusos mangueras/neumaticas rodamientos/rodillos rodamientos/bolas rodamientos/agujas rodamientos/axiales rodamientos/lineales rodamientos/esfericos rodamientos/cilindricos rodamientos/contacto-angular rodamientos/chumaceras retenes-sellos-orings/retenes retenes-sellos-orings/sellos-mecanicos retenes-sellos-orings/o-rings retenes-sellos-orings/sellos-hidraulicos retenes-sellos-orings/sellos-neumaticos bandas-transportadoras/pesadas bandas-transportadoras/livianas cadenas/rodillos-precision cadenas/acero-inoxidable cadenas/transmision cadenas/con-transportador cadenas/agricolas poleas/taladro-conico poleas/sincronas poleas/mi-lock pinones/taladro-conico pinones/agujero-piloto pinones/taladro-conico-2-cadenas pinones/agujero-piloto-2-cadenas niples-conexiones/hidraulicos niples-conexiones/cobre niples-conexiones/conexiones-rapidas niples-conexiones/adaptadores niples-conexiones/conectores-rapidos cilindros/neumaticos cilindros/htr-tirantes cilindros/hcw-patentado cangilones/hd-stax cangilones/nylon cangilones/poliuretano cangilones/pernos cangilones/grapas-empalme cangilones/laterales cardanes/agricolas cajas-comandos/palanca-1 cajas-comandos/palancas-2 cajas-comandos/palancas-3 cajas-comandos/palancas-4 cajas-comandos/palancas-5 cajas-comandos/palancas-6 abrazaderas/galvanizadas abrazaderas/inoxidables abrazaderas/tornillo abrazaderas/alambre; do
  touch src/app/components/views/products/categories/$sub/index.tsx
done

# Crear archivos de Applications
touch src/app/components/views/applications/index.tsx
touch src/app/components/views/applications/components/{ApplicationCard,ApplicationHero,RelatedProducts,IndustryBenefits}.tsx
touch src/app/components/views/applications/{industria-alimenticia,agroindustrial,industria-minera,industria-metalurgica,petroleo-gas,manufactura,construccion,transporte,logistica}.tsx

echo "✅ Estructura creada exitosamente"