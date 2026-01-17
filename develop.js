console.log('Entorno de desarrollo');

   function modoDesarrollo() {
       return {
           debug: true,
           version: '0.1.0-dev',
           ambiente: 'desarrollo',
           puerto: 3000
       };
   }

   const config = {
       apiUrl: 'http://localhost:3000',
       debug: true,
       logLevel: 'verbose'
   };

   console.log('Configuración de desarrollo cargada:', config);
