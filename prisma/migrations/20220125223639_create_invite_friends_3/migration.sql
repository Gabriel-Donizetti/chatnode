-- CreateTable
CREATE TABLE `InviteFriends` (
    `id` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_send_invite` VARCHAR(191) NOT NULL,
    `user_recive_invite` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `InviteFriends` ADD CONSTRAINT `InviteFriends_user_send_invite_fkey` FOREIGN KEY (`user_send_invite`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InviteFriends` ADD CONSTRAINT `InviteFriends_user_recive_invite_fkey` FOREIGN KEY (`user_recive_invite`) REFERENCES `friends`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
