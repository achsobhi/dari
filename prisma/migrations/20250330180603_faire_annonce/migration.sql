-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `cin` VARCHAR(10) NOT NULL,
    `tel` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'LOCATAIRE', 'BAILLEURE') NOT NULL DEFAULT 'LOCATAIRE',
    `rate` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_tel_key`(`tel`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Annonce` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `Certificat_de_propriété` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(40) NOT NULL,
    `surface` INTEGER NOT NULL,
    `nb_chambre` INTEGER NOT NULL,
    `nb_douche` INTEGER NOT NULL,
    `localisation` VARCHAR(191) NOT NULL,
    `type_appartement` ENUM('APPARTEMENT', 'STUDIO', 'MAISON', 'VILLA') NOT NULL,
    `type_annonce` ENUM('MENSUELLE', 'HEBDOMADAIRE') NOT NULL,
    `meuble` BOOLEAN NOT NULL DEFAULT false,
    `prix` INTEGER NOT NULL,
    `rating` FLOAT DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `annonce_id` INTEGER NOT NULL,
    `path` VARCHAR(300) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Annonce` ADD CONSTRAINT `Annonce_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_annonce_id_fkey` FOREIGN KEY (`annonce_id`) REFERENCES `Annonce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
