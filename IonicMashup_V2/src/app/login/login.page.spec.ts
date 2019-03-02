import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { LoginPage } from './login.page';
import {RouterTestingModule} from '@angular/router/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let submit: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ LoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    submit = fixture.debugElement.query(By.css('#login'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should do nothing', () => {
    expect(true).toBeTruthy();

  });

  it('Button enabled to false disabled the submit button', () => {
    component.enabled = false;
    fixture.detectChanges();
    expect(submit.nativeElement.disabled).toBeTruthy();
  });

  it('Button enabled to true enables the submit button', () => {
    component.enabled = true;
    fixture.detectChanges();
    expect(submit.nativeElement.disabled).toBeFalsy();
  });


});
