import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
  PropertyPaneSlider
} from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxStartOftheMonthReactWebPartStrings';
import SpfxStartOftheMonthReact from './components/SpfxStartOftheMonthReact';
import { ISpfxStartOftheMonthReactProps } from './components/ISpfxStartOftheMonthReactProps';

export interface ISpfxStartOftheMonthReactWebPartProps {
  bio: string;
  name: string;
  department: string;
  imageUrl: string ;
  experience: number;

}

export default class SpfxStartOftheMonthReactWebPart extends BaseClientSideWebPart<ISpfxStartOftheMonthReactWebPartProps> {

  public render(): void {

    if(this.properties.department === '' || this.properties.department === undefined){
      this.properties.department= "Pornographic Actor";
    }
    //https://boroktimes.com/storage/2023/07/channels4_profile-696x696.jpeg
    const element: React.ReactElement<ISpfxStartOftheMonthReactProps > = React.createElement(
      SpfxStartOftheMonthReact,
      {
        empbio: this.properties.bio,
        empname:this.properties.name,
        empdepartment:this.properties.department,
        empimageurl:this.properties.imageUrl,
        empexperience:this.properties.experience
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('bio', {
                  label: "Star Bio"
                }),
                
                PropertyPaneTextField('name', {
                  label: "Name of the Star"
                }),

                PropertyPaneDropdown('department', {
                  label: "Professional Roles",
                  options:
                  [
                    {key : 'Pornographic Actor' , text :'Pornographic Actor'},
                    {key : 'Pornographic Director' , text :'Pornographic Director'},
                    {key : 'YouTuber' , text :'YouTuber'}
                  ],
                  selectedKey : 'Pornographic Actor'

                }),

                PropertyPaneTextField('imageUrl', {
                  label: "Photo URL of the Star"
                }),

                PropertyPaneSlider('experience', {
                  label: "Total Experience", min:0, max : 20
                }),


              ]
            }
          ]
        }
      ]
    };
  }
}
