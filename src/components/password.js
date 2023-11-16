const bcrypt = require('bcryptjs'); // Importa bcryptjs

// Supongamos que tienes un método para registrar un nuevo usuario
async function saveNewUser(username, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10); // Hash de la contraseña con salt 10

  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword, // Guarda la contraseña hasheada
    },
  });

  return newUser;
}