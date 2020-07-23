package com.receitafacil.blog.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.receitafacil.blog.model.Receita;
import com.receitafacil.blog.repository.ReceitaRepository;

@RestController
@RequestMapping("/receitas")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ReceitaController {

	@Autowired
	private ReceitaRepository repository;

	// Get - Listar Todos
	@GetMapping
	public ResponseEntity<List<Receita>> GetAll() {
		return ResponseEntity.ok(repository.findAll());
	}

	// Receita Específica
	@GetMapping("/{id}")
	public ResponseEntity<Receita> detalhar(@PathVariable Long id) {
		Optional<Receita> receita = repository.findById(id);
		if (receita.isPresent()) {
			return ResponseEntity.ok(receita.get());
		}
		return ResponseEntity.badRequest().build();
	}

	// Busca por nome da receita
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<Receita>> GetByNome(@PathVariable String nome) {
		return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
	}

	// Cadastrando Receita
	@PostMapping
	public ResponseEntity<Receita> post(@RequestBody Receita receita) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(receita));
	}

	// Alterando a Receita
	@PutMapping
	public ResponseEntity<Receita> put(@RequestBody Receita receita) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(receita));
	}

	
	//Deletando Receita
	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {
		repository.deleteById(id);
	}
	
	
}
