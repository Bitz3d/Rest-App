package pl.rafallab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.rafallab.model.Book;
import pl.rafallab.model.MemoryBookService;

@RestController
@RequestMapping("/books")
public class BookController {

	
	private MemoryBookService memoryBookService;
	
	@Autowired
	public BookController(MemoryBookService memoryBookService) {
		this.memoryBookService = memoryBookService;
	}

	@RequestMapping("/hello")
	public String hello() {
		return "{hello: World}";
	}

	@RequestMapping("/helloBook")
	public Book helloBook() {
		return new Book(1L, "9788324631766", "Thinking in Java", "Bruce Eckel", "Helion", "programming");
	}
	
	
	
	@RequestMapping
	public List<Book> getAllBooks() {
		return memoryBookService.getAllBooks();
	}
	
	@RequestMapping("/{id}")
	public Book getBookByid(@PathVariable String id) 
	{

		return memoryBookService.getBookById(Long.parseLong(id));
	}
	
	

}
