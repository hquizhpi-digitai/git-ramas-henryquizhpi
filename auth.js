class SistemaAutenticacion {
       constructor() {
           this.usuarios = [];
       }
       
       registrarUsuario(nombre, email, password) {
           const usuario = {
               id: this.usuarios.length + 1,
               nombre: nombre,
               email: email,
               password: this.encriptarPassword(password),
               fechaRegistro: new Date()
           };
           this.usuarios.push(usuario);
           console.log(`Usuario ${nombre} registrado exitosamente`);
           return usuario;
       }
       
       encriptarPassword(password) {
           return btoa(password);
       }
       
       login(email, password) {
           const usuario = this.usuarios.find(u => u.email === email);
           if (usuario && usuario.password === this.encriptarPassword(password)) {
               return { success: true, usuario: usuario };
           }
           return { success: false, mensaje: 'Credenciales inválidas' };
       }
       
       listarUsuarios() {
           return this.usuarios;
       }
   }

   const auth = new SistemaAutenticacion();
   console.log('Sistema de autenticación inicializado');
