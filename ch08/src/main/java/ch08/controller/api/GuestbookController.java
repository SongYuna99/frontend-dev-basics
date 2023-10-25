package ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch08.dto.JsonResult;
import ch08.vo.GuestbookVo;

@RestController
@RequestMapping("/api/guestbook")
public class GuestbookController {
	
	@PostMapping
	public JsonResult ex01(@RequestBody GuestbookVo vo) {
		vo.setNo(1L);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	@GetMapping
	public JsonResult ex02(Long sno) {
		List<GuestbookVo> list = new ArrayList<>();
		
		GuestbookVo vo1 = new GuestbookVo();
		vo1.setNo(1L);
		vo1.setName("둘리");
		vo1.setContents("둘리입니다.");
		list.add(vo1);
		
		GuestbookVo vo2 = new GuestbookVo();
		vo2.setNo(2L);
		vo2.setName("마이콜");
		vo2.setContents("마이콜입니다.");
		list.add(vo2);
		
		GuestbookVo vo3 = new GuestbookVo();
		vo3.setNo(3L);
		vo3.setName("길동이");
		vo3.setContents("길동이입니다.");
		list.add(vo3);
		
		return JsonResult.success(list);
	}
}
