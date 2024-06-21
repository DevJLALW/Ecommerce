package com.learn.ecommerce.repository;


import com.learn.ecommerce.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<Products, Long> {
}
