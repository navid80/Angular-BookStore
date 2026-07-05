import {Combobox, ComboboxPopup, ComboboxWidget} from '@angular/aria/combobox';
import {Listbox, Option} from '@angular/aria/listbox';
import {OverlayModule} from '@angular/cdk/overlay';
import {afterRenderEffect, Component, computed, signal, viewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [Combobox, ComboboxPopup, ComboboxWidget, Listbox, Option, OverlayModule, FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  clear() {
    this.query.set('');
    this.selectedOption.set([]);
    this.popupExpanded.set(false);
  }
  readonly listbox = viewChild(Listbox);
  readonly combobox = viewChild(Combobox);
  popupExpanded = signal(false);
  query = signal('');
  selectedOption = signal<string[]>([]);
  countries = computed(() =>
    ALL_BOOKS.filter((country) => country.toLowerCase().startsWith(this.query().toLowerCase())),
  );
  constructor() {
    afterRenderEffect(() => {
      if (this.combobox()?.expanded() === true) {
        this.listbox()?.scrollActiveItemIntoView();
      }
    });
  }
  onCommit() {
    const selected = this.selectedOption();
    if (selected.length > 0) {
      this.query.set(selected[0]);
    }
    this.popupExpanded.set(false);
    this.combobox()?.element.focus();
  }
}

const ALL_BOOKS = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo (Congo-Brazzaville)',
  'Costa Rica',
  "Côte d'Ivoire"
]