CREATE TABLE if not EXISTS `user`(
    `user_id` VARCHAR(255) NOT NULL PRIMARY KEY,
    `location_id` VARCHAR(255) NULL,
    `loyalty_id` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `fullname` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(255) NOT NULL,
    `image_profile` IMAGE NULL,
    `user_role` ENUM('admin', 'user') NOT NULL
);

CREATE TABLE IF NOT EXISTS `product_media`(
    `media_id` VARCHAR(255) NOT NULL PRIMARY KEY,
    `product_id` VARCHAR(255) NOT NULL,
    `media_file` BLOB NOT NULL,
    `display_squence` INT NOT NULL
);

CREATE TABLE IF NOT EXISTS `product`(
    `product_id` VARCHAR(255) NOT NULL PRIMARY KEY,
    `category_id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `price` DOUBLE PRECISION NOT NULL,
    `stock` INT NOT NULL
);

CREATE TABLE IF NOT EXISTS `category`(
    `category_id` VARCHAR(255) NOT NULL PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `user_loyalty`(
    `loyalty_id` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `min_transaction` INT NOT NULL
);

CREATE TABLE `cart`(
    `cart_id` VARCHAR(255) NOT NULL PRIMARY KEY,
    `user_id` VARCHAR(255) NOT NULL,
    `product_id` VARCHAR(255) NOT NULL,
    `quantity` INT NOT NULL
);

CREATE TABLE `voucher`(
    `voucher_id` VARCHAR(255) NOT NULL PRIMARY KEY,
    `loyalty_id` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `amount` DOUBLE NOT NULL
);

CREATE TABLE `invoice`(
    `invoice_id` VARCHAR(255) NOT NULL PRIMARY KEY,
    `order_id` VARCHAR(255) NOT NULL,
    `waybill` VARCHAR(255) NOT NULL
);

CREATE TABLE `order`(
    `order_id` VARCHAR(255) NOT NULL PRIMARY KEY,
    `cart_id` VARCHAR(255) NOT NULL,
    `voucher_id` VARCHAR(255) NOT NULL,
    `order_date` TIMESTAMP NOT NULL,
    `total` DOUBLE NOT NULL,
    `media_transaction` BLOB NOT NULL,
    `is_confirmed` BOOLEAN NOT NULL    
);

CREATE TABLE `province`(
    `province_id` VARCHAR(255) NOT NULL PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `district`(
    `district_id` VARCHAR(255) NOT NULL PRIMARY KEY,
    `province_id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `subdistrict`(
    `subdistrict_id` VARCHAR(255) NOT NULL PRIMARY KEY,
    `district_id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `village`(
    `village_id` VARCHAR(255) NOT NULL PRIMARY KEY,
    `subdistrict_id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `subvillage`(
    `subvillage_id` VARCHAR(255) NOT NULL,
    `village_id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `user_location`(
    `location_id` VARCHAR(255) NOT NULL,
    `location_name` VARCHAR(255) NOT NULL,
    `province_id` VARCHAR(255) NOT NULL,
    `district_id` VARCHAR(255) NOT NULL,
    `subdistrict_id` VARCHAR(255) NOT NULL,
    `village_id` VARCHAR(255) NOT NULL,
    `subvillage_id` VARCHAR(255) NOT NULL,
    `postal_code_id` VARCHAR(255) NOT NULL
);

-- Relation
ALTER TABLE `district`
ADD FOREIGN KEY (`province_id`) REFERENCES `province`(`province_id`);
ALTER TABLE `subdistrict`
ADD FOREIGN KEY (`district_id`) REFERENCES `district`(`district_id`);

ALTER TABLE `village`
ADD FOREIGN KEY (`subdistrict_id`) REFERENCES `subdistrict`(`subdistrict_id`);

ALTER TABLE `product_media`
ADD FOREIGN KEY (`product_id`) REFERENCES `product`(`product_id`);

ALTER TABLE `product`
ADD FOREIGN KEY (`category_id`) REFERENCES `category`(`category_id`);

ALTER TABLE `cart`
ADD FOREIGN KEY (`product_id`) REFERENCES `product`(`product_id`), (`user_id`) REFERENCES `user`(`user_id`) ;

ALTER TABLE `user_location`
ADD FOREIGN KEY (`province_id`) REFERENCES `province`(`province_id`), (`district_id`) REFERENCES `district`(`district_id`), (`subdistrict_id`), REFERENCES `subdistrict`(`subdistrict_id`), (`village_id`) REFERENCES `village`(`village_id`);

ALTER TABLE `voucher`
ADD FOREIGN KEY (`loyalty_id`) REFERENCES `loyalty`(`loyalty_id`);

ALTER TABLE `user`
ADD FOREIGN KEY (`loyalty_id`) REFERENCES `user_loyalty`(`loyalty_id`);

ALTER TABLE `user_location`
ADD FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`);

ALTER TABLE `invoice`
ADD FOREIGN KEY(`order_id`) REFERENCES `order`(`order_id`);

ALTER TABLE `order`
ADD FOREIGN KEY(`cart_id`) REFERENCES `cart`(`cart_id`);

ALTER TABLE `order`
ADD FOREIGN KEY(`voucher_id`) REFERENCES `voucher`(`voucher_id`);