package com.receitafacil.blog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.receitafacil.blog.model.Receita;

@Repository
public interface ReceitaRepository extends JpaRepository<Receita, Long>{
	public List<Receita> findAllByNomeContainingIgnoreCase(String nome);
	
}
