package com.learn.ecommerce.controller;

import com.learn.ecommerce.model.Products;
import com.learn.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/api/products")
    public List<Products> getProducts(){
        return productService.getAllProducts();
    }
}
