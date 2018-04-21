package pl.rafallab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.rafallab.model.Book;
import pl.rafallab.model.BookService;
import pl.rafallab.model.MemoryBookService;

@RestController
@RequestMapping("/books")
public class BookController {

	
	private BookService bookService;
	private Long nextid=4L;
	
	@Autowired
	public BookController(MemoryBookService memoryBookService) {
		this.bookService = memoryBookService;
	}


	@RequestMapping
	public List<Book> getAllBooks() {
		return bookService.getAllBooks();
	}
	
	@RequestMapping("/{id}")
	public Book getBookByid(@PathVariable String id) 
	{

		return bookService.getBookById(Long.parseLong(id));
	}
	
	@PostMapping
	public void addBookToList(@RequestBody Book book) 
	{
		bookService.addtBook(book, nextid++);
		
	}
	
	@PutMapping("/{id}")	
	public void editBook(@RequestBody Book book, @PathVariable Long id) 
	{
		bookService.editBook(book, id);
		
	}
	
	
	@DeleteMapping("/{id}")	
	public void editBook(@PathVariable Long id) 
	{
		bookService.deleteBook(id);
		
	}
	
	
	
	

}
